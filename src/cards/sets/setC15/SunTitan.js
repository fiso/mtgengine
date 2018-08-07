"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setCM2/SunTitan");

class SunTitan extends SunTitanBase {
  constructor (game) {
    super(game, "Sun Titan", "Commander 2015", "C15");
  }
}

module.exports = SunTitan;
