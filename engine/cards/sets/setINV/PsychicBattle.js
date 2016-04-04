"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicBattle extends Card {
  constructor(game) {
    super(game, "Psychic Battle", "Invasion", "INV");
  }
}

module.exports = PsychicBattle;
