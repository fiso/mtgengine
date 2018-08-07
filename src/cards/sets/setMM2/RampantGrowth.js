"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setDDS/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor (game) {
    super(game, "Rampant Growth", "Modern Masters 2015", "MM2");
  }
}

module.exports = RampantGrowth;
