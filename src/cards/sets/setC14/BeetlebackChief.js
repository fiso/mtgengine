"use strict";
const Constants = require ("../../../Constants");
const BeetlebackChiefBase = require("../setCM2/BeetlebackChief");

class BeetlebackChief extends BeetlebackChiefBase {
  constructor (game) {
    super(game, "Beetleback Chief", "Commander 2014", "C14");
  }
}

module.exports = BeetlebackChief;
