"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PursuitofFlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Pursuit of Flight", "Return to Ravnica", "RTR");
  }
}

module.exports = PursuitofFlight;
