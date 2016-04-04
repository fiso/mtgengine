"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowCoveredSwampBase = require("../setCSP/SnowCoveredSwamp.js");

class SnowCoveredSwamp extends SnowCoveredSwampBase {
  constructor(game) {
    super(game, "Snow-Covered Swamp", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredSwamp;
