"use strict";
const Constants = require ("../../../Constants");
const PrimalGrowthBase = require("../setC15/PrimalGrowth");

class PrimalGrowth extends PrimalGrowthBase {
  constructor (game) {
    super(game, "Primal Growth", "Planeshift", "PLS");
  }
}

module.exports = PrimalGrowth;
