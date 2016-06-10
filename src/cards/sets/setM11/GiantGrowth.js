"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setATH/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor (game) {
    super(game, "Giant Growth", "Magic 2011", "M11");
  }
}

module.exports = GiantGrowth;
