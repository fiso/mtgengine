"use strict";
const Constants = require ("../../../Constants");
const BurstLightningBase = require("../setMM2/BurstLightning");

class BurstLightning extends BurstLightningBase {
  constructor (game) {
    super(game, "Burst Lightning", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = BurstLightning;
