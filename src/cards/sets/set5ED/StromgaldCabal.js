"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../set6ED/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor(game) {
    super(game, "Stromgald Cabal", "Fifth Edition", "5ED");
  }
}

module.exports = StromgaldCabal;
