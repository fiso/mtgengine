"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpectralGateguardsBase = require("../setAVR/SpectralGateguards.js");

class SpectralGateguards extends SpectralGateguardsBase {
  constructor(game) {
    super(game, "Spectral Gateguards", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SpectralGateguards;
