"use strict";
const Constants = require ("../../../Constants");
const SilentArbiterBase = require("../setCNS/SilentArbiter");

class SilentArbiter extends SilentArbiterBase {
  constructor (game) {
    super(game, "Silent Arbiter", "Fifth Dawn", "5DN");
  }
}

module.exports = SilentArbiter;
