"use strict";
const Constants = require ("../../../Constants");
const NobleTemplarBase = require("../setA25/NobleTemplar");

class NobleTemplar extends NobleTemplarBase {
  constructor (game) {
    super(game, "Noble Templar", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NobleTemplar;
