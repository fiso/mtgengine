"use strict";
const Constants = require ("../../../Constants");
const SpectralProcessionBase = require("../setC14/SpectralProcession");

class SpectralProcession extends SpectralProcessionBase {
  constructor(game) {
    super(game, "Spectral Procession", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = SpectralProcession;
