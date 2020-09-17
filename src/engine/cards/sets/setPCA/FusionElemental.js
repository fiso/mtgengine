'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class FusionElemental extends Card {
  constructor (game) {
    super(game, 'Fusion Elemental', 'Planechase Anthology', 'PCA');
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 8, 8);
  }
}

module.exports = FusionElemental;
