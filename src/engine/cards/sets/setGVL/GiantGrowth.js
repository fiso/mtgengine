"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setBBD/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = GiantGrowth;
