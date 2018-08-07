"use strict";
const Constants = require ("../../../Constants");
const PoisonCounterBase = require("../setTNPH/PoisonCounter");

class PoisonCounter extends PoisonCounterBase {
  constructor (game) {
    super(game, "Poison Counter", "Mirrodin Besieged Tokens", "TMBS");
  }
}

module.exports = PoisonCounter;
