"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrislySpectacleBase = require("../setDDM/GrislySpectacle.js");

class GrislySpectacle extends GrislySpectacleBase {
  constructor(game) {
    super(game, "Grisly Spectacle", "Gatecrash", "GTC");
  }
}

module.exports = GrislySpectacle;
