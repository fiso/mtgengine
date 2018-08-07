"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Duel Decks: Merfolk vs. Goblins Tokens", "TDDT");
  }
}

module.exports = Elemental;
