"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralBearsBase = require("../setATH/SpectralBears.js");

class SpectralBears extends SpectralBearsBase {
  constructor(game) {
    super(game, "Spectral Bears", "Homelands", "HML");
  }
}

module.exports = SpectralBears;
