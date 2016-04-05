"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiendHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Fiend Hunter", "Commander 2013 Edition", "C13");
  }
}

module.exports = FiendHunter;
