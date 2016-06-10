"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralFlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Flight", "Innistrad", "ISD");
  }
}

module.exports = SpectralFlight;
