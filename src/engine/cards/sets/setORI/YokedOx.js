"use strict";
const Card = require("../../../objects/Card");

class YokedOx extends Card {
  constructor (game) {
    super(game, "Yoked Ox", "Magic Origins", "ORI");
    this.cost = "{W}";
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 0, 4);
  }
}

module.exports = YokedOx;
