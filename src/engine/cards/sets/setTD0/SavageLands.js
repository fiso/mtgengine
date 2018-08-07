"use strict";
const Constants = require ("../../../Constants");
const SavageLandsBase = require("../setC18/SavageLands");

class SavageLands extends SavageLandsBase {
  constructor (game) {
    super(game, "Savage Lands", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = SavageLands;
