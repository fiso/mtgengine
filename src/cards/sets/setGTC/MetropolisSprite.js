"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetropolisSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Metropolis Sprite", "Gatecrash", "GTC");
  }
}

module.exports = MetropolisSprite;
