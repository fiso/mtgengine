"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosConfetti extends Card {
  constructor(game) {
    super(game, "Chaos Confetti", "Unglued", "UGL");
  }
}

module.exports = ChaosConfetti;
