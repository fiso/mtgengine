"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Runewing extends Card {
  constructor(game) {
    super(game, "Runewing", "Return to Ravnica", "RTR");
  }
}

module.exports = Runewing;
