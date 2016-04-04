"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Doorkeeper extends Card {
  constructor(game) {
    super(game, "Doorkeeper", "Return to Ravnica", "RTR");
  }
}

module.exports = Doorkeeper;
