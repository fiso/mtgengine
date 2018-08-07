"use strict";
const Constants = require ("../../../Constants");
const ElephantBase = require("../setTCMA/Elephant");

class Elephant extends ElephantBase {
  constructor (game) {
    super(game, "Elephant", "Duel Decks: Garruk vs. Liliana Tokens", "TDDD");
  }
}

module.exports = Elephant;
