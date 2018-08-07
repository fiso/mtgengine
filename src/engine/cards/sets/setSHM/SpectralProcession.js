"use strict";
const Constants = require ("../../../Constants");
const SpectralProcessionBase = require("../setMM2/SpectralProcession");

class SpectralProcession extends SpectralProcessionBase {
  constructor (game) {
    super(game, "Spectral Procession", "Shadowmoor", "SHM");
  }
}

module.exports = SpectralProcession;
