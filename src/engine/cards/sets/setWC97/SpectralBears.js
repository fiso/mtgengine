"use strict";
const Constants = require ("../../../Constants");
const SpectralBearsBase = require("../setMED/SpectralBears");

class SpectralBears extends SpectralBearsBase {
  constructor (game) {
    super(game, "Spectral Bears", "World Championship Decks 1997", "WC97");
  }
}

module.exports = SpectralBears;
