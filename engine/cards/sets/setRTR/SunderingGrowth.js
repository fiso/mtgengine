"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunderingGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Sundering Growth", "Return to Ravnica", "RTR");
  }
}

module.exports = SunderingGrowth;
