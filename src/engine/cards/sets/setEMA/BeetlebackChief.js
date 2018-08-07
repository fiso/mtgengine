"use strict";
const Constants = require ("../../../Constants");
const BeetlebackChiefBase = require("../setCM2/BeetlebackChief");

class BeetlebackChief extends BeetlebackChiefBase {
  constructor (game) {
    super(game, "Beetleback Chief", "Eternal Masters", "EMA");
  }
}

module.exports = BeetlebackChief;
