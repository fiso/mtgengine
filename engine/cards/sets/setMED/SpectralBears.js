"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralBearsBase = require("../setATH/SpectralBears.js");

class SpectralBears extends SpectralBearsBase {
  constructor(game) {
    super(game, "Spectral Bears", "Masters Edition", "MED");
  }
}

module.exports = SpectralBears;
