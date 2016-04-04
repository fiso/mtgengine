"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnholyStrength extends Card {
  constructor(game) {
    super(game, "Unholy Strength", "Anthologies", "ATH");
  }
}

module.exports = UnholyStrength;
