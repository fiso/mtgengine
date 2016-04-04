"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralProcessionBase = require("../setC14/SpectralProcession.js");

class SpectralProcession extends SpectralProcessionBase {
  constructor(game) {
    super(game, "Spectral Procession", "Shadowmoor", "SHM");
  }
}

module.exports = SpectralProcession;
