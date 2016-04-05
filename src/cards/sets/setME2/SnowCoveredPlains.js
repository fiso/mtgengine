"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredPlainsBase = require("../setCSP/SnowCoveredPlains");

class SnowCoveredPlains extends SnowCoveredPlainsBase {
  constructor(game) {
    super(game, "Snow-Covered Plains", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredPlains;
