"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageSurge extends Card {
  constructor(game) {
    super(game, "Savage Surge", "Return to Ravnica", "RTR");
  }
}

module.exports = SavageSurge;
