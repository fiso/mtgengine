"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicRebuttal extends Card {
  constructor(game) {
    super(game, "Psychic Rebuttal", "Magic Origins", "ORI");
  }
}

module.exports = PsychicRebuttal;
