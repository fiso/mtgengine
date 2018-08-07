"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Duel Decks Anthology: Divine vs. Demonic Tokens", "TDVD");
  }
}

module.exports = Spirit;
