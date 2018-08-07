"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredForestBase = require("../setME2/SnowCoveredForest");

class SnowCoveredForest extends SnowCoveredForestBase {
  constructor (game) {
    super(game, "Snow-Covered Forest", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredForest;
