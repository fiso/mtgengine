"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplosiveImpact extends Card {
  constructor(game) {
    super(game, "Explosive Impact", "Return to Ravnica", "RTR");
  }
}

module.exports = ExplosiveImpact;
