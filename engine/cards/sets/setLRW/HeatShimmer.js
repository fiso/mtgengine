"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatShimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Heat Shimmer", "Lorwyn", "LRW");
  }
}

module.exports = HeatShimmer;
