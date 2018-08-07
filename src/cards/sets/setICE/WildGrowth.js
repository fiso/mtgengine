"use strict";
const Constants = require ("../../../Constants");
const WildGrowthBase = require("../setC18/WildGrowth");

class WildGrowth extends WildGrowthBase {
  constructor (game) {
    super(game, "Wild Growth", "Ice Age", "ICE");
  }
}

module.exports = WildGrowth;
