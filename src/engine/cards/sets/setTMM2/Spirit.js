"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Spirit;
