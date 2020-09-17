'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class EliteVanguard extends Card {
  constructor (game) {
    super(game, 'Elite Vanguard', 'Eternal Masters', 'EMA');
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }
}

module.exports = EliteVanguard;
