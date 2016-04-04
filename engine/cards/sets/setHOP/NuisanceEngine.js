"use strict";
const Constants = require ("../../../Constants");
const NuisanceEngineBase = require("../setMRD/NuisanceEngine");

class NuisanceEngine extends NuisanceEngineBase {
  constructor(game) {
    super(game, "Nuisance Engine", "Planechase", "HOP");
  }
}

module.exports = NuisanceEngine;
