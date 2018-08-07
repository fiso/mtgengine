"use strict";
const Constants = require ("../../../Constants");
const BatBase = require("../setTM19/Bat");

class Bat extends BatBase {
  constructor (game) {
    super(game, "Bat", "Duel Decks Anthology: Garruk vs. Liliana Tokens", "TGVL");
  }
}

module.exports = Bat;
