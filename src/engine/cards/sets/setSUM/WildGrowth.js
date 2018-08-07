"use strict";
const Constants = require ("../../../Constants");
const WildGrowthBase = require("../setC18/WildGrowth");

class WildGrowth extends WildGrowthBase {
  constructor (game) {
    super(game, "Wild Growth", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = WildGrowth;
