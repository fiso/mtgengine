"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitansStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Titan's Strength", "Magic Origins", "ORI");
  }
}

module.exports = TitansStrength;
