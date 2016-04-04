"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralPrison extends Card {
  constructor(game) {
    super(game, "Spectral Prison", "Avacyn Restored", "AVR");
  }
}

module.exports = SpectralPrison;
