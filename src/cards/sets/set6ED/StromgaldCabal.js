"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../setME2/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor (game) {
    super(game, "Stromgald Cabal", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StromgaldCabal;
