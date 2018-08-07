"use strict";
const Constants = require ("../../../Constants");
const EchoingTruthBase = require("../setC15/EchoingTruth");

class EchoingTruth extends EchoingTruthBase {
  constructor (game) {
    super(game, "Echoing Truth", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EchoingTruth;
