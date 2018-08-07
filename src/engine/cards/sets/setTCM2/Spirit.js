"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Spirit;
