"use strict";
const Constants = require ("../../../Constants");
const CoilingOracleBase = require("../setpARL/CoilingOracle");

class CoilingOracle extends CoilingOracleBase {
  constructor (game) {
    super(game, "Coiling Oracle", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CoilingOracle;
