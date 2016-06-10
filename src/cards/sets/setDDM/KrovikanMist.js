"use strict";
const Constants = require ("../../../Constants");
const KrovikanMistBase = require("../setCSP/KrovikanMist");

class KrovikanMist extends KrovikanMistBase {
  constructor (game) {
    super(game, "Krovikan Mist", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = KrovikanMist;
