"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicSpiral extends Card {
  constructor(game) {
    super(game, "Psychic Spiral", "Return to Ravnica", "RTR");
  }
}

module.exports = PsychicSpiral;
