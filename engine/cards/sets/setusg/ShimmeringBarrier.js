"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringBarrier extends Card {
  constructor(game) {
    super(game, "Shimmering Barrier", "Urza's Saga", "USG");
  }
}

module.exports = ShimmeringBarrier;
