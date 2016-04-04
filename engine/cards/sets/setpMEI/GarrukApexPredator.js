"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GarrukApexPredatorBase = require("../setM15/GarrukApexPredator.js");

class GarrukApexPredator extends GarrukApexPredatorBase {
  constructor(game) {
    super(game, "Garruk, Apex Predator", "Media Inserts", "pMEI");
  }
}

module.exports = GarrukApexPredator;
