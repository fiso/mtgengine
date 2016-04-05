"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setATH/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor(game) {
    super(game, "Giant Growth", "Limited Edition Beta", "LEB");
  }
}

module.exports = GiantGrowth;
