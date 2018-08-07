"use strict";
const Constants = require ("../../../Constants");
const BeetlebackChiefBase = require("../setCM2/BeetlebackChief");

class BeetlebackChief extends BeetlebackChiefBase {
  constructor (game) {
    super(game, "Beetleback Chief", "Vintage Masters", "VMA");
  }
}

module.exports = BeetlebackChief;
