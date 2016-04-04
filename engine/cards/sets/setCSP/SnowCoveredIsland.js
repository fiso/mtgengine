"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowCoveredIsland extends Card {
  constructor(game) {
    super(game, "Snow-Covered Island", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredIsland;
