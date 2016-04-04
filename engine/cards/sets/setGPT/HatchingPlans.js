"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HatchingPlans extends UnimplementedCard {
  constructor(game) {
    super(game, "Hatching Plans", "Guildpact", "GPT");
  }
}

module.exports = HatchingPlans;
