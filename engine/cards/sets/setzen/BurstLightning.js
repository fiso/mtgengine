"use strict";
const Constants = require ("../../../Constants");
const BurstLightningBase = require("../setpMPR/BurstLightning");

class BurstLightning extends BurstLightningBase {
  constructor(game) {
    super(game, "Burst Lightning", "Zendikar", "ZEN");
  }
}

module.exports = BurstLightning;
