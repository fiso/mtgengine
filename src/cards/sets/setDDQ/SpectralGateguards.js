"use strict";
const Constants = require ("../../../Constants");
const SpectralGateguardsBase = require("../setAVR/SpectralGateguards");

class SpectralGateguards extends SpectralGateguardsBase {
  constructor (game) {
    super(game, "Spectral Gateguards", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SpectralGateguards;
