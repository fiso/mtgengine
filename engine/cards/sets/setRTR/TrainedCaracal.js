"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedCaracal extends Card {
  constructor(game) {
    super(game, "Trained Caracal", "Return to Ravnica", "RTR");
  }
}

module.exports = TrainedCaracal;
