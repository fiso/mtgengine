"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredPlainsBase = require("../setME2/SnowCoveredPlains");

class SnowCoveredPlains extends SnowCoveredPlainsBase {
  constructor (game) {
    super(game, "Snow-Covered Plains", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredPlains;
