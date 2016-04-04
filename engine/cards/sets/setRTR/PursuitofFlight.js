"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PursuitofFlight extends Card {
  constructor(game) {
    super(game, "Pursuit of Flight", "Return to Ravnica", "RTR");
  }
}

module.exports = PursuitofFlight;
