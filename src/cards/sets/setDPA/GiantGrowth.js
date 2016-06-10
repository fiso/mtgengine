"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setATH/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GiantGrowth;
