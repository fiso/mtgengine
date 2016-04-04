"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralShieldBase = require("../setICE/SpectralShield.js");

class SpectralShield extends SpectralShieldBase {
  constructor(game) {
    super(game, "Spectral Shield", "Masters Edition III", "ME3");
  }
}

module.exports = SpectralShield;
