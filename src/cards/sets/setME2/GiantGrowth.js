"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setBBD/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Masters Edition II", "ME2");
  }
}

module.exports = GiantGrowth;
