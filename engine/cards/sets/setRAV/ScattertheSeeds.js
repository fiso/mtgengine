"use strict";
const Constants = require ("../../../Constants");
const ScattertheSeedsBase = require("../setMM2/ScattertheSeeds");

class ScattertheSeeds extends ScattertheSeedsBase {
  constructor(game) {
    super(game, "Scatter the Seeds", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ScattertheSeeds;
