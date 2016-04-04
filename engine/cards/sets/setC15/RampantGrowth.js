"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor(game) {
    super(game, "Rampant Growth", "Commander 2015", "C15");
  }
}

module.exports = RampantGrowth;
