"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreetSweeper extends Card {
  constructor(game) {
    super(game, "Street Sweeper", "Return to Ravnica", "RTR");
  }
}

module.exports = StreetSweeper;
