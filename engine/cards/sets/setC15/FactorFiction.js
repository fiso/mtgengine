"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FactorFiction extends UnimplementedCard {
  constructor(game) {
    super(game, "Fact or Fiction", "Commander 2015", "C15");
  }
}

module.exports = FactorFiction;
