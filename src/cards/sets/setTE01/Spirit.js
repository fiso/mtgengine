"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Archenemy: Nicol Bolas Tokens", "TE01");
  }
}

module.exports = Spirit;
