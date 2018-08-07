"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredMountainBase = require("../setME2/SnowCoveredMountain");

class SnowCoveredMountain extends SnowCoveredMountainBase {
  constructor (game) {
    super(game, "Snow-Covered Mountain", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredMountain;
