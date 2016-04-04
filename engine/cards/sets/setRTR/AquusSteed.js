"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AquusSteed extends Card {
  constructor(game) {
    super(game, "Aquus Steed", "Return to Ravnica", "RTR");
  }
}

module.exports = AquusSteed;
