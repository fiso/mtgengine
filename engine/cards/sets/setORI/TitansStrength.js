"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitansStrength extends Card {
  constructor(game) {
    super(game, "Titan's Strength", "Magic Origins", "ORI");
  }
}

module.exports = TitansStrength;
