"use strict";
const Constants = require ("../../../Constants");
const SilentArbiterBase = require("../set5DN/SilentArbiter");

class SilentArbiter extends SilentArbiterBase {
  constructor (game) {
    super(game, "Silent Arbiter", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SilentArbiter;
