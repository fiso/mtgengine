"use strict";
const Constants = require ("../../../Constants");
const GrislySpectacleBase = require("../setIMA/GrislySpectacle");

class GrislySpectacle extends GrislySpectacleBase {
  constructor (game) {
    super(game, "Grisly Spectacle", "Gatecrash", "GTC");
  }
}

module.exports = GrislySpectacle;
