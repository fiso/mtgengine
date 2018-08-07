"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicSpiral extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Spiral", "Return to Ravnica", "RTR");
  }
}

module.exports = PsychicSpiral;
