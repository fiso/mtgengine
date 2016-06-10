"use strict";
const Constants = require ("../../../Constants");
const GarrukApexPredatorBase = require("../setM15/GarrukApexPredator");

class GarrukApexPredator extends GarrukApexPredatorBase {
  constructor (game) {
    super(game, "Garruk, Apex Predator", "Media Inserts", "pMEI");
  }
}

module.exports = GarrukApexPredator;
