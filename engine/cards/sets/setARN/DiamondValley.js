"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiamondValley extends Card {
  constructor(game) {
    super(game, "Diamond Valley", "Arabian Nights", "ARN");
  }
}

module.exports = DiamondValley;
