"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenevolentUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Benevolent Unicorn", "Mirage", "MIR");
  }
}

module.exports = BenevolentUnicorn;
