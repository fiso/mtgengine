"use strict";
const Constants = require ("../../../Constants");
const GrislySpectacleBase = require("../setIMA/GrislySpectacle");

class GrislySpectacle extends GrislySpectacleBase {
  constructor (game) {
    super(game, "Grisly Spectacle", "Modern Masters 2017", "MM3");
  }
}

module.exports = GrislySpectacle;
