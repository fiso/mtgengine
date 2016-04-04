"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariKeyrune extends Card {
  constructor(game) {
    super(game, "Golgari Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariKeyrune;
