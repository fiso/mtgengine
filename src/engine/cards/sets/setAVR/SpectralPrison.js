"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralPrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Prison", "Avacyn Restored", "AVR");
  }
}

module.exports = SpectralPrison;
