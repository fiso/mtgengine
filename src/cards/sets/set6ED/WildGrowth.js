"use strict";
const Constants = require ("../../../Constants");
const WildGrowthBase = require("../setBTD/WildGrowth");

class WildGrowth extends WildGrowthBase {
  constructor (game) {
    super(game, "Wild Growth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WildGrowth;
