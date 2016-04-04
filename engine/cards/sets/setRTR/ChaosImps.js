"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosImps extends Card {
  constructor(game) {
    super(game, "Chaos Imps", "Return to Ravnica", "RTR");
  }
}

module.exports = ChaosImps;
