"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenevolentUnicorn extends Card {
  constructor(game) {
    super(game, "Benevolent Unicorn", "Mirage", "MIR");
  }
}

module.exports = BenevolentUnicorn;
