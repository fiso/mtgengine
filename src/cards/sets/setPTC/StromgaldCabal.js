"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../setME2/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor (game) {
    super(game, "Stromgald Cabal", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = StromgaldCabal;
