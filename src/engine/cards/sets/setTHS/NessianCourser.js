'use strict';
const Card = require('../../../objects/Card');
const Creature = require('../../../objects/Creature');

class NessianCourser extends Card {
  constructor (game) {
    super(game, 'Nessian Courser', 'Theros', 'THS');
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 3, 3);
  }
}

module.exports = NessianCourser;
