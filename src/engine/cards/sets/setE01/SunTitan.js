"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setCM2/SunTitan");

class SunTitan extends SunTitanBase {
  constructor (game) {
    super(game, "Sun Titan", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SunTitan;
