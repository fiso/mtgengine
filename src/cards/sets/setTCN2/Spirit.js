"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Spirit;
