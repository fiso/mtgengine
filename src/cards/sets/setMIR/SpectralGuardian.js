"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Guardian", "Mirage", "MIR");
  }
}

module.exports = SpectralGuardian;
