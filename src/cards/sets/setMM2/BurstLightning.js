"use strict";
const Constants = require ("../../../Constants");
const BurstLightningBase = require("../setpMPR/BurstLightning");

class BurstLightning extends BurstLightningBase {
  constructor(game) {
    super(game, "Burst Lightning", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BurstLightning;
