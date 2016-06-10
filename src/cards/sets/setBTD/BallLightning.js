"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Ball Lightning", "Beatdown Box Set", "BTD");
  }
}

module.exports = BallLightning;
