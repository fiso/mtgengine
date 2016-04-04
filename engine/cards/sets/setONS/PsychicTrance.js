"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicTrance extends Card {
  constructor(game) {
    super(game, "Psychic Trance", "Onslaught", "ONS");
  }
}

module.exports = PsychicTrance;
