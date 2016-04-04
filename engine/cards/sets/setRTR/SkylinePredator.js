"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkylinePredator extends Card {
  constructor(game) {
    super(game, "Skyline Predator", "Return to Ravnica", "RTR");
  }
}

module.exports = SkylinePredator;
