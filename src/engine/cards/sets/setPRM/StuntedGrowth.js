"use strict";
const Constants = require ("../../../Constants");
const StuntedGrowthBase = require("../setME2/StuntedGrowth");

class StuntedGrowth extends StuntedGrowthBase {
  constructor (game) {
    super(game, "Stunted Growth", "Magic Online Promos", "PRM");
  }
}

module.exports = StuntedGrowth;
