"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageTwister extends Card {
  constructor(game) {
    super(game, "Savage Twister", "Archenemy", "ARC");
  }
}

module.exports = SavageTwister;
