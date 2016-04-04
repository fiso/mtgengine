"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicTheft extends Card {
  constructor(game) {
    super(game, "Psychic Theft", "Prophecy", "PCY");
  }
}

module.exports = PsychicTheft;
