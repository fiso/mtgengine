"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilentArbiterBase = require("../set5DN/SilentArbiter.js");

class SilentArbiter extends SilentArbiterBase {
  constructor(game) {
    super(game, "Silent Arbiter", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SilentArbiter;
