"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BallLightning extends Card {
  constructor(game) {
    super(game, "Ball Lightning", "Beatdown Box Set", "BTD");
  }
}

module.exports = BallLightning;
