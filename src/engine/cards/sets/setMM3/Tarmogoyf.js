'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class Tarmogoyf extends Card {
  constructor (game) {
    super(game, 'Tarmogoyf', 'Modern Masters 2017', 'MM3');
    this.cost = '{1}{G}';
  }

  getPower () {
    return [...new Set(this._game._players.reduce(
      (acc, player) => {
        return acc.concat(player._graveyard.getTypesInZone());
      }, []
    ))].length;
  }

  getToughness () {
    return this.getPower() + 1;
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this);
  }
}

module.exports = Tarmogoyf;
