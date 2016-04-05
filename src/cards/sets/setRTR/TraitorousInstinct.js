"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TraitorousInstinct extends UnimplementedCard {
  constructor(game) {
    super(game, "Traitorous Instinct", "Return to Ravnica", "RTR");
  }
}

module.exports = TraitorousInstinct;
