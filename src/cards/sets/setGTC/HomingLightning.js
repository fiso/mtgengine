"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomingLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Homing Lightning", "Gatecrash", "GTC");
  }
}

module.exports = HomingLightning;
