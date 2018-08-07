"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiamondValley extends UnimplementedCard {
  constructor (game) {
    super(game, "Diamond Valley", "Masters Edition", "MED");
  }
}

module.exports = DiamondValley;
