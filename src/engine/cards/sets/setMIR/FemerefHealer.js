"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FemerefHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Femeref Healer", "Mirage", "MIR");
  }
}

module.exports = FemerefHealer;
