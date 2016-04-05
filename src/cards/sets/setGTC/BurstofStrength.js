"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstofStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Burst of Strength", "Gatecrash", "GTC");
  }
}

module.exports = BurstofStrength;
