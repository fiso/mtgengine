"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SidarKondo extends Card {
  constructor(game) {
    super(game, "Sidar Kondo", "Vanguard", "VAN");
  }
}

module.exports = SidarKondo;
