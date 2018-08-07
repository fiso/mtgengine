"use strict";
const Constants = require ("../../../Constants");
const GarrukApexPredatorBase = require("../setM15/GarrukApexPredator");

class GarrukApexPredator extends GarrukApexPredatorBase {
  constructor (game) {
    super(game, "Garruk, Apex Predator", "San Diego Comic-Con 2014", "PS14");
  }
}

module.exports = GarrukApexPredator;
