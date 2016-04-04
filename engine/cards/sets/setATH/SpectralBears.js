"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralBears extends Card {
  constructor(game) {
    super(game, "Spectral Bears", "Anthologies", "ATH");
  }
}

module.exports = SpectralBears;
