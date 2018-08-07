"use strict";
const Constants = require ("../../../Constants");
const ElephantBase = require("../setTCMA/Elephant");

class Elephant extends ElephantBase {
  constructor (game) {
    super(game, "Elephant", "Duel Decks Anthology: Garruk vs. Liliana Tokens", "TGVL");
  }
}

module.exports = Elephant;
