"use strict";
const Constants = require ("../../../Constants");
const InsultInjuryBase = require("../setAKH/InsultInjury");

class InsultInjury extends InsultInjuryBase {
  constructor (game) {
    super(game, "Insult // Injury", "Amonkhet Promos", "PAKH");
  }
}

module.exports = InsultInjury;
