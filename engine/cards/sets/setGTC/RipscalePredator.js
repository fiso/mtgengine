"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RipscalePredator extends Card {
  constructor(game) {
    super(game, "Ripscale Predator", "Gatecrash", "GTC");
  }
}

module.exports = RipscalePredator;
