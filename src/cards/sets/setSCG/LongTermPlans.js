"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LongTermPlans extends UnimplementedCard {
  constructor (game) {
    super(game, "Long-Term Plans", "Scourge", "SCG");
  }
}

module.exports = LongTermPlans;
