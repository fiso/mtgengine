"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LongTermPlans extends Card {
  constructor(game) {
    super(game, "Long-Term Plans", "Scourge", "SCG");
  }
}

module.exports = LongTermPlans;
