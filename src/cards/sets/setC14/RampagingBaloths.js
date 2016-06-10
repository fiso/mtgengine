"use strict";
const Constants = require ("../../../Constants");
const RampagingBalothsBase = require("../setC13/RampagingBaloths");

class RampagingBaloths extends RampagingBalothsBase {
  constructor (game) {
    super(game, "Rampaging Baloths", "Commander 2014", "C14");
  }
}

module.exports = RampagingBaloths;
