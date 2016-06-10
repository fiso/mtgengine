"use strict";
const Constants = require ("../../../Constants");
const SpectralSliverBase = require("../setLGN/SpectralSliver");

class SpectralSliver extends SpectralSliverBase {
  constructor (game) {
    super(game, "Spectral Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = SpectralSliver;
