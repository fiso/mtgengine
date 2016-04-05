"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Growth", "Beatdown Box Set", "BTD");
  }
}

module.exports = WildGrowth;
