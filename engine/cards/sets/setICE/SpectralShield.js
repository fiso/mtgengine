"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Shield", "Ice Age", "ICE");
  }
}

module.exports = SpectralShield;
