"use strict";
const Constants = require ("../../../Constants");
const SpectralBearsBase = require("../setATH/SpectralBears");

class SpectralBears extends SpectralBearsBase {
  constructor (game) {
    super(game, "Spectral Bears", "Homelands", "HML");
  }
}

module.exports = SpectralBears;
