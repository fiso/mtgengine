'use strict';
const Zone = require('./Zone');
const Constants = require('../Constants');
const CardLoader = require('../cards/CardLoader');

class Library extends Zone {
  constructor (game, owner, deck) {
    super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER,
      owner, Constants.zoneIdentifiers.LIBRARY);

    this._promise = new Promise((resolve, reject) => {
      for (const cardName of deck._mainDeck) {
        game._cardApi.getCard(cardName).then((card) => {
          const loader = new CardLoader(cardName, card.set_name,
            card.set.toUpperCase(), game);
          loader.ready().then((card) => {
            this._objects.push(card);
            if (this._objects.length === deck._mainDeck.length) {
              this.shuffle();
              resolve();
            }
          });
        });
      }
    });
  }

  ready () {
    return this._promise;
  }

  drawCard () {
    return this._objects.pop();
  }
}

module.exports = Library;
