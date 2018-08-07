"use strict";
const Constants = require ("../../../Constants");
const RampagingBalothsBase = require("../setC18/RampagingBaloths");

class RampagingBaloths extends RampagingBalothsBase {
  constructor (game) {
    super(game, "Rampaging Baloths", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = RampagingBaloths;
