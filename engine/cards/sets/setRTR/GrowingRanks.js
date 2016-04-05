"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrowingRanks extends UnimplementedCard {
  constructor(game) {
    super(game, "Growing Ranks", "Return to Ravnica", "RTR");
  }
}

module.exports = GrowingRanks;
