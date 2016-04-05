"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredIslandBase = require("../setCSP/SnowCoveredIsland");

class SnowCoveredIsland extends SnowCoveredIslandBase {
  constructor(game) {
    super(game, "Snow-Covered Island", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredIsland;
