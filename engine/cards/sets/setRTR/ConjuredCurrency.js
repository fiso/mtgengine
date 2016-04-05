"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConjuredCurrency extends UnimplementedCard {
  constructor(game) {
    super(game, "Conjured Currency", "Return to Ravnica", "RTR");
  }
}

module.exports = ConjuredCurrency;
