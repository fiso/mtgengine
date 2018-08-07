"use strict";
const Constants = require ("../../../Constants");
const ElementalBase = require("../setTC18/Elemental");

class Elemental extends ElementalBase {
  constructor (game) {
    super(game, "Elemental", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = Elemental;
