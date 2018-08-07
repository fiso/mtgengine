"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FactorFiction extends UnimplementedCard {
  constructor (game) {
    super(game, "Fact or Fiction", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FactorFiction;
