"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setDDS/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor (game) {
    super(game, "Rampant Growth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RampantGrowth;
