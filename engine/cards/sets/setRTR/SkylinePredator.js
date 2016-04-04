"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkylinePredator extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyline Predator", "Return to Ravnica", "RTR");
  }
}

module.exports = SkylinePredator;
