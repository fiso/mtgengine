"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowCoveredForestBase = require("../setCSP/SnowCoveredForest.js");

class SnowCoveredForest extends SnowCoveredForestBase {
  constructor(game) {
    super(game, "Snow-Covered Forest", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredForest;
