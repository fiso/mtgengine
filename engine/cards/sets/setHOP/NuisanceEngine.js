"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NuisanceEngineBase = require("../setMRD/NuisanceEngine.js");

class NuisanceEngine extends NuisanceEngineBase {
  constructor(game) {
    super(game, "Nuisance Engine", "Planechase", "HOP");
  }
}

module.exports = NuisanceEngine;
