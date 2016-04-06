"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredForestBase = require("../setCSP/SnowCoveredForest");

class SnowCoveredForest extends SnowCoveredForestBase {
  constructor(game) {
    super(game, "Snow-Covered Forest", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredForest;