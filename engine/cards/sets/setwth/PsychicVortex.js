"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicVortex extends Card {
  constructor(game) {
    super(game, "Psychic Vortex", "Weatherlight", "WTH");
  }
}

module.exports = PsychicVortex;
