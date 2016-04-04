"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestinPeace extends Card {
  constructor(game) {
    super(game, "Rest in Peace", "Return to Ravnica", "RTR");
  }
}

module.exports = RestinPeace;
