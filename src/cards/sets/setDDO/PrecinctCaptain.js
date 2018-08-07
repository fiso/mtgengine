"use strict";
const Constants = require ("../../../Constants");
const PrecinctCaptainBase = require("../setE01/PrecinctCaptain");

class PrecinctCaptain extends PrecinctCaptainBase {
  constructor (game) {
    super(game, "Precinct Captain", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PrecinctCaptain;
