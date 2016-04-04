"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralForce extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Force", "Time Spiral", "TSP");
  }
}

module.exports = SpectralForce;
