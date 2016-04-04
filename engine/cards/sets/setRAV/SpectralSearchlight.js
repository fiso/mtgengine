"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralSearchlightBase = require("../setCNS/SpectralSearchlight.js");

class SpectralSearchlight extends SpectralSearchlightBase {
  constructor(game) {
    super(game, "Spectral Searchlight", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SpectralSearchlight;
