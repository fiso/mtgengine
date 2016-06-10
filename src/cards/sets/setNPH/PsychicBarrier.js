"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Barrier", "New Phyrexia", "NPH");
  }
}

module.exports = PsychicBarrier;
