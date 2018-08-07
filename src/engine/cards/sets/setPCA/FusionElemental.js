"use strict";
const Card = require("../../../objects/Card");

class FusionElemental extends Card {
  constructor (game) {
    super(game, "Fusion Elemental", "Planechase Anthology", "PCA");
    this.cost = "{W}{U}{B}{R}{G}";
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
