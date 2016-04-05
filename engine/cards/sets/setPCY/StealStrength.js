"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StealStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Steal Strength", "Prophecy", "PCY");
  }
}

module.exports = StealStrength;
