"use strict";
const Constants = require ("../../../Constants");
const SpectralSearchlightBase = require("../setBBD/SpectralSearchlight");

class SpectralSearchlight extends SpectralSearchlightBase {
  constructor (game) {
    super(game, "Spectral Searchlight", "Conspiracy", "CNS");
  }
}

module.exports = SpectralSearchlight;
