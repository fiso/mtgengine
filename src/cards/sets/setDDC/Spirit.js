"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setDDQ/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Spirit;
