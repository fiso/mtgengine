"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Ball Lightning", "Masters 25", "A25");
  }
}

module.exports = BallLightning;
