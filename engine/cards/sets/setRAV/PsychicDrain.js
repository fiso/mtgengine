"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicDrain extends Card {
  constructor(game) {
    super(game, "Psychic Drain", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PsychicDrain;
