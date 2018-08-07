"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectralShift extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectral Shift", "Fifth Dawn", "5DN");
  }
}

module.exports = SpectralShift;
