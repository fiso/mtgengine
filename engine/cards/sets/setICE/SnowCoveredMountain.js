"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowCoveredMountainBase = require("../setCSP/SnowCoveredMountain.js");

class SnowCoveredMountain extends SnowCoveredMountainBase {
  constructor(game) {
    super(game, "Snow-Covered Mountain", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredMountain;
