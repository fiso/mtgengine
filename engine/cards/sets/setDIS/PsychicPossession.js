"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicPossession extends Card {
  constructor(game) {
    super(game, "Psychic Possession", "Dissension", "DIS");
  }
}

module.exports = PsychicPossession;
