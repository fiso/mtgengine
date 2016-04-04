"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrowingRanks extends Card {
  constructor(game) {
    super(game, "Growing Ranks", "Return to Ravnica", "RTR");
  }
}

module.exports = GrowingRanks;
