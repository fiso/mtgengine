"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalBalance extends UnimplementedCard {
  constructor(game) {
    super(game, "Natural Balance", "Mirage", "MIR");
  }
}

module.exports = NaturalBalance;
