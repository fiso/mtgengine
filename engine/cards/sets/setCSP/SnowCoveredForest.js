"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowCoveredForest extends Card {
  constructor(game) {
    super(game, "Snow-Covered Forest", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredForest;
