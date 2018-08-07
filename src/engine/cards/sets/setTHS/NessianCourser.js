"use strict";
const Card = require("../../../objects/Card");

class NessianCourser extends Card {
  constructor (game) {
    super(game, "Nessian Courser", "Theros", "THS");
    this.cost = "{2}{G}";
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
