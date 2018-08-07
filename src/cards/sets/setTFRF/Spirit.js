"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Fate Reforged Tokens", "TFRF");
  }
}

module.exports = Spirit;
