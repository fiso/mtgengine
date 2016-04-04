"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiendHunter extends Card {
  constructor(game) {
    super(game, "Fiend Hunter", "Commander 2013 Edition", "C13");
  }
}

module.exports = FiendHunter;
