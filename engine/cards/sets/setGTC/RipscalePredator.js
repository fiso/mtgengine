"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RipscalePredator extends UnimplementedCard {
  constructor(game) {
    super(game, "Ripscale Predator", "Gatecrash", "GTC");
  }
}

module.exports = RipscalePredator;
