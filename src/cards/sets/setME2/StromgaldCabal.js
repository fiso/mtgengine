"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../set6ED/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor(game) {
    super(game, "Stromgald Cabal", "Masters Edition II", "ME2");
  }
}

module.exports = StromgaldCabal;
