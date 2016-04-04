"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowCoveredMountain extends Card {
  constructor(game) {
    super(game, "Snow-Covered Mountain", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredMountain;
