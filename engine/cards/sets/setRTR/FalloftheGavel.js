"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalloftheGavel extends Card {
  constructor(game) {
    super(game, "Fall of the Gavel", "Return to Ravnica", "RTR");
  }
}

module.exports = FalloftheGavel;
