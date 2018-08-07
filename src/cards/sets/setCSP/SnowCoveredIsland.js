"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredIslandBase = require("../setME2/SnowCoveredIsland");

class SnowCoveredIsland extends SnowCoveredIslandBase {
  constructor (game) {
    super(game, "Snow-Covered Island", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredIsland;
