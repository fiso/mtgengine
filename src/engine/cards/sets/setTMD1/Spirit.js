"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Modern Event Deck 2014 Tokens", "TMD1");
  }
}

module.exports = Spirit;
