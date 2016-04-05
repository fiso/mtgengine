"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiamondValley extends UnimplementedCard {
  constructor(game) {
    super(game, "Diamond Valley", "Arabian Nights", "ARN");
  }
}

module.exports = DiamondValley;
