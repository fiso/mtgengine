"use strict";
const Constants = require ("../../../Constants");
const DrakeBase = require("../setTCMA/Drake");

class Drake extends DrakeBase {
  constructor (game) {
    super(game, "Drake", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = Drake;
