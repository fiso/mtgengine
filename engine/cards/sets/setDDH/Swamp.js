"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Swamp;
