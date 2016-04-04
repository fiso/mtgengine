"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RubblebackRhino extends Card {
  constructor(game) {
    super(game, "Rubbleback Rhino", "Return to Ravnica", "RTR");
  }
}

module.exports = RubblebackRhino;
