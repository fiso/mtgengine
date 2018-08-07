"use strict";
const Constants = require ("../../../Constants");
const StuntedGrowthBase = require("../setME2/StuntedGrowth");

class StuntedGrowth extends StuntedGrowthBase {
  constructor (game) {
    super(game, "Stunted Growth", "Ice Age", "ICE");
  }
}

module.exports = StuntedGrowth;
