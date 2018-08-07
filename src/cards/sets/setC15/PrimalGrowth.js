"use strict";
const Constants = require ("../../../Constants");
const PrimalGrowthBase = require("../setCMA/PrimalGrowth");

class PrimalGrowth extends PrimalGrowthBase {
  constructor (game) {
    super(game, "Primal Growth", "Commander 2015", "C15");
  }
}

module.exports = PrimalGrowth;
