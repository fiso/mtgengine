"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Swamp;
