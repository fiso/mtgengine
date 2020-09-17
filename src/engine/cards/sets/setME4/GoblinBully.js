'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class GoblinBully extends Card {
  constructor (game) {
    super(game, 'Goblin Bully', 'Masters Edition IV', 'ME4');
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }
}

module.exports = GoblinBully;
