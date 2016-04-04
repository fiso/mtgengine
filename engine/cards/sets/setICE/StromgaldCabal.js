"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StromgaldCabalBase = require("../set6ED/StromgaldCabal.js");

class StromgaldCabal extends StromgaldCabalBase {
  constructor(game) {
    super(game, "Stromgald Cabal", "Ice Age", "ICE");
  }
}

module.exports = StromgaldCabal;
