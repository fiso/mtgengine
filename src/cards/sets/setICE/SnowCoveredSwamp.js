"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredSwampBase = require("../setME2/SnowCoveredSwamp");

class SnowCoveredSwamp extends SnowCoveredSwampBase {
  constructor (game) {
    super(game, "Snow-Covered Swamp", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredSwamp;
