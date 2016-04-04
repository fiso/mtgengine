"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicPurge extends Card {
  constructor(game) {
    super(game, "Psychic Purge", "Legends", "LEG");
  }
}

module.exports = PsychicPurge;
