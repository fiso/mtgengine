"use strict";
const Constants = require ("../../../Constants");
const SonicBurstBase = require("../setBTD/SonicBurst");

class SonicBurst extends SonicBurstBase {
  constructor(game) {
    super(game, "Sonic Burst", "Exodus", "EXO");
  }
}

module.exports = SonicBurst;
