"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildGrowthBase = require("../setBTD/WildGrowth.js");

class WildGrowth extends WildGrowthBase {
  constructor(game) {
    super(game, "Wild Growth", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WildGrowth;
