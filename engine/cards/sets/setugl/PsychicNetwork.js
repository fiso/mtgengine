"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicNetwork extends Card {
  constructor(game) {
    super(game, "Psychic Network", "Unglued", "UGL");
  }
}

module.exports = PsychicNetwork;
