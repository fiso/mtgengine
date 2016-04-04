"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectralShield extends Card {
  constructor(game) {
    super(game, "Spectral Shield", "Ice Age", "ICE");
  }
}

module.exports = SpectralShield;
