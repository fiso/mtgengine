"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredPlainsBase = require("../setCSP/SnowCoveredPlains");

class SnowCoveredPlains extends SnowCoveredPlainsBase {
  constructor(game) {
    super(game, "Snow-Covered Plains", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredPlains;
