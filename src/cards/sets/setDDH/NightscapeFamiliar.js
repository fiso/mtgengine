"use strict";
const Constants = require ("../../../Constants");
const NightscapeFamiliarBase = require("../setC13/NightscapeFamiliar");

class NightscapeFamiliar extends NightscapeFamiliarBase {
  constructor (game) {
    super(game, "Nightscape Familiar", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = NightscapeFamiliar;
