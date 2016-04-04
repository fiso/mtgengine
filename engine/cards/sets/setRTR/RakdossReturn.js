"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdossReturn extends Card {
  constructor(game) {
    super(game, "Rakdos's Return", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdossReturn;
