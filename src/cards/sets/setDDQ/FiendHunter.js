"use strict";
const Constants = require ("../../../Constants");
const FiendHunterBase = require("../setA25/FiendHunter");

class FiendHunter extends FiendHunterBase {
  constructor (game) {
    super(game, "Fiend Hunter", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = FiendHunter;
