"use strict";
const Constants = require ("../../../Constants");
const NuisanceEngineBase = require("../setHOP/NuisanceEngine");

class NuisanceEngine extends NuisanceEngineBase {
  constructor (game) {
    super(game, "Nuisance Engine", "Mirrodin", "MRD");
  }
}

module.exports = NuisanceEngine;
