"use strict";
const Constants = require ("../../../Constants");
const SpectralShieldBase = require("../setME3/SpectralShield");

class SpectralShield extends SpectralShieldBase {
  constructor (game) {
    super(game, "Spectral Shield", "Ice Age", "ICE");
  }
}

module.exports = SpectralShield;
