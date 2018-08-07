"use strict";
const Constants = require ("../../../Constants");
const ContagionClaspBase = require("../setTD2/ContagionClasp");

class ContagionClasp extends ContagionClaspBase {
  constructor (game) {
    super(game, "Contagion Clasp", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ContagionClasp;
