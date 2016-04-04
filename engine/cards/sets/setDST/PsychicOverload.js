"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicOverload extends Card {
  constructor(game) {
    super(game, "Psychic Overload", "Darksteel", "DST");
  }
}

module.exports = PsychicOverload;
