"use strict";
const Constants = require ("../../../Constants");
const SpectralBearsBase = require("../setATH/SpectralBears");

class SpectralBears extends SpectralBearsBase {
  constructor (game) {
    super(game, "Spectral Bears", "Masters Edition", "MED");
  }
}

module.exports = SpectralBears;
