"use strict";
const Constants = require ("../../../Constants");
const SpectralGateguardsBase = require("../setDDQ/SpectralGateguards");

class SpectralGateguards extends SpectralGateguardsBase {
  constructor (game) {
    super(game, "Spectral Gateguards", "Avacyn Restored", "AVR");
  }
}

module.exports = SpectralGateguards;
