"use strict";
const Constants = require ("../../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth");

class RampantGrowth extends RampantGrowthBase {
  constructor(game) {
    super(game, "Rampant Growth", "Ninth Edition", "9ED");
  }
}

module.exports = RampantGrowth;
