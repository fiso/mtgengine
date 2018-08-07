"use strict";
const Constants = require ("../../../Constants");
const StromgaldCabalBase = require("../setME2/StromgaldCabal");

class StromgaldCabal extends StromgaldCabalBase {
  constructor (game) {
    super(game, "Stromgald Cabal", "World Championship Decks 1999", "WC99");
  }
}

module.exports = StromgaldCabal;
