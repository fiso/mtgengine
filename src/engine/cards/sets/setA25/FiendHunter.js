"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiendHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiend Hunter", "Masters 25", "A25");
  }
}

module.exports = FiendHunter;
