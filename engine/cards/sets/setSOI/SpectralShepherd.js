"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralShepherd extends UnimplementedCard {
  constructor(game) {
    super(game, "Spectral Shepherd", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SpectralShepherd;
