"use strict";
const Constants = require ("../../../Constants");
const SunderingGrowthBase = require("../setMM3/SunderingGrowth");

class SunderingGrowth extends SunderingGrowthBase {
  constructor (game) {
    super(game, "Sundering Growth", "Return to Ravnica", "RTR");
  }
}

module.exports = SunderingGrowth;
