"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiendHunterBase = require("../setC13/FiendHunter.js");

class FiendHunter extends FiendHunterBase {
  constructor(game) {
    super(game, "Fiend Hunter", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = FiendHunter;
