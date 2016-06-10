"use strict";
const Constants = require ("../../../Constants");
const SnowCoveredMountainBase = require("../setCSP/SnowCoveredMountain");

class SnowCoveredMountain extends SnowCoveredMountainBase {
  constructor (game) {
    super(game, "Snow-Covered Mountain", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredMountain;
