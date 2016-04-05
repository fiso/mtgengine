"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NumberCrunch extends UnimplementedCard {
  constructor(game) {
    super(game, "Number Crunch", "Unhinged", "UNH");
  }
}

module.exports = NumberCrunch;
