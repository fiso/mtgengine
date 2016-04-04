"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildGrowthBase = require("../setBTD/WildGrowth.js");

class WildGrowth extends WildGrowthBase {
  constructor(game) {
    super(game, "Wild Growth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WildGrowth;
