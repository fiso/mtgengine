"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brushstrider extends Card {
  constructor(game) {
    super(game, "Brushstrider", "Return to Ravnica", "RTR");
  }
}

module.exports = Brushstrider;
