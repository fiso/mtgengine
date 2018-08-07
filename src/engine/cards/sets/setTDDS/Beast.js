"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = Beast;
