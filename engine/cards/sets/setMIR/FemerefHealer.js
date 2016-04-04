"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FemerefHealer extends Card {
  constructor(game) {
    super(game, "Femeref Healer", "Mirage", "MIR");
  }
}

module.exports = FemerefHealer;
