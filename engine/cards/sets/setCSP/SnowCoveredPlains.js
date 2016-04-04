"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowCoveredPlains extends Card {
  constructor(game) {
    super(game, "Snow-Covered Plains", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredPlains;
