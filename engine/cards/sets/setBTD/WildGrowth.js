"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildGrowth extends Card {
  constructor(game) {
    super(game, "Wild Growth", "Beatdown Box Set", "BTD");
  }
}

module.exports = WildGrowth;
