"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowCoveredPlainsBase = require("../setCSP/SnowCoveredPlains.js");

class SnowCoveredPlains extends SnowCoveredPlainsBase {
  constructor(game) {
    super(game, "Snow-Covered Plains", "Ice Age", "ICE");
  }
}

module.exports = SnowCoveredPlains;
