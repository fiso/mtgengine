'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class SavannahLions extends Card {
  constructor (game) {
    super(game, 'Savannah Lions', 'Masters 25', 'A25');
    this.cost = '{W}';
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }
}

module.exports = SavannahLions;
