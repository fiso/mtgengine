"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setDDS/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor (game) {
    super(game, "Rampant Growth", "Magic 2010", "M10");
  }
}

module.exports = RampantGrowth;
