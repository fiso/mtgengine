"use strict";
const Constants = require ("../../../Constants");
const CagedSunBase = require("../setCM2/CagedSun");

class CagedSun extends CagedSunBase {
  constructor (game) {
    super(game, "Caged Sun", "New Phyrexia", "NPH");
  }
}

module.exports = CagedSun;
