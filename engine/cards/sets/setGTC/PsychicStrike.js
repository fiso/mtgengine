"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicStrike extends Card {
  constructor(game) {
    super(game, "Psychic Strike", "Gatecrash", "GTC");
  }
}

module.exports = PsychicStrike;
