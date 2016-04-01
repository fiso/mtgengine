"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");
const Card = require("../objects/Card");
const CardLoader = require("../cards/CardLoader");

class Library extends Zone {
  constructor (game, owner, deck, onComplete) {
    super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.LIBRARY);

    this._onComplete = onComplete;

    for (let cardName of deck._mainDeck) {
      let loader = new CardLoader(cardName, undefined, card => {
        this._objects.push(card);
        if (this._objects.length === deck._mainDeck.length) {
          this.onDeckCompleted();
        }
      }, game);
    }
  }

  onDeckCompleted () {
    this.shuffle();
    if (this._onComplete) {
      this._onComplete();
    }
  }

  drawCard () {
    return this._objects.pop();
  }
}

module.exports = Library;
