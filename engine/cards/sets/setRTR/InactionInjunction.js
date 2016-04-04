"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InactionInjunction extends Card {
  constructor(game) {
    super(game, "Inaction Injunction", "Return to Ravnica", "RTR");
  }
}

module.exports = InactionInjunction;
