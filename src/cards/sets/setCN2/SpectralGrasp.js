"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Grasp", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SpectralGrasp;
