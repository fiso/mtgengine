"use strict";
const Constants = require ("../../../Constants");
const SpectralShieldBase = require("../setICE/SpectralShield");

class SpectralShield extends SpectralShieldBase {
  constructor (game) {
    super(game, "Spectral Shield", "Masters Edition III", "ME3");
  }
}

module.exports = SpectralShield;
