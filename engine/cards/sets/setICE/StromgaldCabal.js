"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../set6ED/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor(game) {
    super(game, "Stromgald Cabal", "Ice Age", "ICE");
  }
}

module.exports = StromgaldCabal;
