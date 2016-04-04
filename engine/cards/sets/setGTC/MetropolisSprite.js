"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetropolisSprite extends Card {
  constructor(game) {
    super(game, "Metropolis Sprite", "Gatecrash", "GTC");
  }
}

module.exports = MetropolisSprite;
