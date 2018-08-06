"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralReserves extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Reserves", "Eldritch Moon", "EMN");
  }
}

module.exports = SpectralReserves;
