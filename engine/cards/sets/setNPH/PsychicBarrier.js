"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicBarrier extends Card {
  constructor(game) {
    super(game, "Psychic Barrier", "New Phyrexia", "NPH");
  }
}

module.exports = PsychicBarrier;
