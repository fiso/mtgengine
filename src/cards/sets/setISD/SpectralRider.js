"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Rider", "Innistrad", "ISD");
  }
}

module.exports = SpectralRider;
