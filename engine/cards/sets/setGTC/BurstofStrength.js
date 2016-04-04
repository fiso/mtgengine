"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurstofStrength extends Card {
  constructor(game) {
    super(game, "Burst of Strength", "Gatecrash", "GTC");
  }
}

module.exports = BurstofStrength;
