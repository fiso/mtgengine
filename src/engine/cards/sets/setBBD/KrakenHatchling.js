'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class KrakenHatchling extends Card {
  constructor (game) {
    super(game, 'Kraken Hatchling', 'Battlebond', 'BBD');
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 0, 4);
  }
}

module.exports = KrakenHatchling;
