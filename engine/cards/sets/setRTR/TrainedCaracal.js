"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedCaracal extends UnimplementedCard {
  constructor(game) {
    super(game, "Trained Caracal", "Return to Ravnica", "RTR");
  }
}

module.exports = TrainedCaracal;
