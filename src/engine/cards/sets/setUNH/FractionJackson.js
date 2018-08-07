"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FractionJackson extends UnimplementedCard {
  constructor (game) {
    super(game, "Fraction Jackson", "Unhinged", "UNH");
  }
}

module.exports = FractionJackson;
