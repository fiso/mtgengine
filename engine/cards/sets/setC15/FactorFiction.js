"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FactorFiction extends Card {
  constructor(game) {
    super(game, "Fact or Fiction", "Commander 2015", "C15");
  }
}

module.exports = FactorFiction;
