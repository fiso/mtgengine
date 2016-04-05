"use strict";
const Constants = require ("../../../Constants");
const MutagenicGrowthBase = require("../setMM2/MutagenicGrowth");

class MutagenicGrowth extends MutagenicGrowthBase {
  constructor(game) {
    super(game, "Mutagenic Growth", "New Phyrexia", "NPH");
  }
}

module.exports = MutagenicGrowth;
