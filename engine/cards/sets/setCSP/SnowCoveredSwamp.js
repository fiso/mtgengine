"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowCoveredSwamp extends Card {
  constructor(game) {
    super(game, "Snow-Covered Swamp", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredSwamp;
