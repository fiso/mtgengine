"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor (game) {
    super(game, "Rampant Growth", "Seventh Edition", "7ED");
  }
}

module.exports = RampantGrowth;
