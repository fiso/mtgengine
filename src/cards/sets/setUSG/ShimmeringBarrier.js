"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Shimmering Barrier", "Urza's Saga", "USG");
  }
}

module.exports = ShimmeringBarrier;
