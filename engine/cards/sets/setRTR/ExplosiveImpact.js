"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveImpact extends UnimplementedCard {
  constructor(game) {
    super(game, "Explosive Impact", "Return to Ravnica", "RTR");
  }
}

module.exports = ExplosiveImpact;
