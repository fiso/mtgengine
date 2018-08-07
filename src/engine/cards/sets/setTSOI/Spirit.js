"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = Spirit;
