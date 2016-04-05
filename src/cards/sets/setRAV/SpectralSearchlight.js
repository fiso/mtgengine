"use strict";
const Constants = require ("../../../Constants");
const SpectralSearchlightBase = require("../setCNS/SpectralSearchlight");

class SpectralSearchlight extends SpectralSearchlightBase {
  constructor(game) {
    super(game, "Spectral Searchlight", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SpectralSearchlight;
