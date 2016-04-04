"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalGrowthBase = require("../setC15/PrimalGrowth.js");

class PrimalGrowth extends PrimalGrowthBase {
  constructor(game) {
    super(game, "Primal Growth", "Planeshift", "PLS");
  }
}

module.exports = PrimalGrowth;
