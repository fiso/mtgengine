"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setBBD/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Masters 25", "A25");
  }
}

module.exports = GiantGrowth;
