"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeatShimmer extends Card {
  constructor(game) {
    super(game, "Heat Shimmer", "Lorwyn", "LRW");
  }
}

module.exports = HeatShimmer;
