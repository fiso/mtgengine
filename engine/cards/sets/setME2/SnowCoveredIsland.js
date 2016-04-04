"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowCoveredIslandBase = require("../setCSP/SnowCoveredIsland.js");

class SnowCoveredIsland extends SnowCoveredIslandBase {
  constructor(game) {
    super(game, "Snow-Covered Island", "Masters Edition II", "ME2");
  }
}

module.exports = SnowCoveredIsland;
