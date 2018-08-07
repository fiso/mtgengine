"use strict";
const Constants = require ("../../../Constants");
const QumuloxBase = require("../setMM2/Qumulox");

class Qumulox extends QumuloxBase {
  constructor (game) {
    super(game, "Qumulox", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Qumulox;
