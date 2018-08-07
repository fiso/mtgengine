"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Shield", "Masters Edition III", "ME3");
  }
}

module.exports = SpectralShield;
