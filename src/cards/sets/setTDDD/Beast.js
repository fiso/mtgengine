"use strict";
const Constants = require ("../../../Constants");
const BeastBase = require("../setTC18/Beast");

class Beast extends BeastBase {
  constructor (game) {
    super(game, "Beast", "Duel Decks: Garruk vs. Liliana Tokens", "TDDD");
  }
}

module.exports = Beast;
