"use strict";
const Constants = require ("../../../Constants");
const GiantGrowthBase = require("../setATH/GiantGrowth");

class GiantGrowth extends GiantGrowthBase {
  constructor(game) {
    super(game, "Giant Growth", "Super Series", "pSUS");
  }
}

module.exports = GiantGrowth;
