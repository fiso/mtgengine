"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartialLaw extends Card {
  constructor(game) {
    super(game, "Martial Law", "Return to Ravnica", "RTR");
  }
}

module.exports = MartialLaw;
