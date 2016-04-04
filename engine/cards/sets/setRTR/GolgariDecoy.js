"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariDecoy extends Card {
  constructor(game) {
    super(game, "Golgari Decoy", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariDecoy;
