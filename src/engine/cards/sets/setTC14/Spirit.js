"use strict";
const Constants = require ("../../../Constants");
const SpiritBase = require("../setMTGA/Spirit");

class Spirit extends SpiritBase {
  constructor (game) {
    super(game, "Spirit", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Spirit;
