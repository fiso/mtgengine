"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TargetingRocket extends UnimplementedCard {
  constructor (game) {
    super(game, "Targeting Rocket", "Unstable", "UST");
  }
}

module.exports = TargetingRocket;
