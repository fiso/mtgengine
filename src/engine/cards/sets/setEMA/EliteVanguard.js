"use strict";
const Card = require("../../../objects/Card");

class EliteVanguard extends Card {
  constructor (game) {
    super(game, "Elite Vanguard", "Eternal Masters", "EMA");
    this.cost = "{W}";
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
