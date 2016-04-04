"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Unholy Strength", "Anthologies", "ATH");
  }
}

module.exports = UnholyStrength;
