"use strict";
const Constants = require ("../../../Constants");
const SpectralProcessionBase = require("../setMM2/SpectralProcession");

class SpectralProcession extends SpectralProcessionBase {
  constructor (game) {
    super(game, "Spectral Procession", "Commander 2014", "C14");
  }
}

module.exports = SpectralProcession;
