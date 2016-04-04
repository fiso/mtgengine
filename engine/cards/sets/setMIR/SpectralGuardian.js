"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralGuardian extends Card {
  constructor(game) {
    super(game, "Spectral Guardian", "Mirage", "MIR");
  }
}

module.exports = SpectralGuardian;
