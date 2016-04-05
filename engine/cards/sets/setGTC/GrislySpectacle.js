"use strict";
const Constants = require ("../../../Constants");
const GrislySpectacleBase = require("../setDDM/GrislySpectacle");

class GrislySpectacle extends GrislySpectacleBase {
  constructor(game) {
    super(game, "Grisly Spectacle", "Gatecrash", "GTC");
  }
}

module.exports = GrislySpectacle;
