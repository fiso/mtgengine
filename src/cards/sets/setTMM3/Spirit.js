"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Spirit;
