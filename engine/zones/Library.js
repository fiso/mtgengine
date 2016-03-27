"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");
const Card = require("../objects/Card");
const CardLoader = require("../cards/CardLoader");

class Library extends Zone {
  constructor (game, owner, deck) {
    super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.LIBRARY);

    deck._mainDeck.forEach(cardName => {
      let loader = new CardLoader(cardName, undefined, card => {
        this._objects.push(card);
        /*if (this._objects.length === deck._mainDeck.length) {
          this.onDeckCompleted();
        }*/
      }, game);
    });
  }

  onDeckCompleted () {
    this.shuffle();
  }

  drawCard () {
    return this._objects.pop();
  }
}

module.exports = Library;
