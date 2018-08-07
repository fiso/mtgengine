"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Duel Decks: Sorin vs. Tibalt Tokens", "TDDK");
  }
}

module.exports = Spirit;
