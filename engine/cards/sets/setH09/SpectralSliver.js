"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralSliverBase = require("../setLGN/SpectralSliver.js");

class SpectralSliver extends SpectralSliverBase {
  constructor(game) {
    super(game, "Spectral Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = SpectralSliver;
