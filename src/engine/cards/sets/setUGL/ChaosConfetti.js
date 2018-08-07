"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosConfetti extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Confetti", "Unglued", "UGL");
  }
}

module.exports = ChaosConfetti;
