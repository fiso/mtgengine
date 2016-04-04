"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor(game) {
    super(game, "Rampant Growth", "Tenth Edition", "10E");
  }
}

module.exports = RampantGrowth;
