"use strict";
const Constants = require ("../../../Constants");
const SpectralBearsBase = require("../setMED/SpectralBears");

class SpectralBears extends SpectralBearsBase {
  constructor (game) {
    super(game, "Spectral Bears", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = SpectralBears;
