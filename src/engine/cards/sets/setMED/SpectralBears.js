"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralBears extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Bears", "Masters Edition", "MED");
  }
}

module.exports = SpectralBears;
