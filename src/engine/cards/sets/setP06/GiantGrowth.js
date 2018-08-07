"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setBBD/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Magic Player Rewards 2006", "P06");
  }
}

module.exports = GiantGrowth;
