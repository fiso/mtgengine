"use strict";
const Constants = require ("../../../Constants");
const SpectralSliverBase = require("../setH09/SpectralSliver");

class SpectralSliver extends SpectralSliverBase {
  constructor (game) {
    super(game, "Spectral Sliver", "Legions", "LGN");
  }
}

module.exports = SpectralSliver;
