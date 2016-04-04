"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrelingAttack extends Card {
  constructor(game) {
    super(game, "Barreling Attack", "Mirage", "MIR");
  }
}

module.exports = BarrelingAttack;
