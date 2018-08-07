"use strict";
const Constants = require ("../../../Constants");
const PoisonCounterBase = require("../setTNPH/PoisonCounter");

class PoisonCounter extends PoisonCounterBase {
  constructor (game) {
    super(game, "Poison Counter", "Scars of Mirrodin Tokens", "TSOM");
  }
}

module.exports = PoisonCounter;
