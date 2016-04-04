"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomingLightning extends Card {
  constructor(game) {
    super(game, "Homing Lightning", "Gatecrash", "GTC");
  }
}

module.exports = HomingLightning;
