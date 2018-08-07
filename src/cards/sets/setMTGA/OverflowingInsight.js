"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverflowingInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Overflowing Insight", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = OverflowingInsight;
