"use strict";
const Constants = require ("../../../Constants");
const GenesisHydraBase = require("../setIMA/GenesisHydra");

class GenesisHydra extends GenesisHydraBase {
  constructor (game) {
    super(game, "Genesis Hydra", "Resale Promos", "PRES");
  }
}

module.exports = GenesisHydra;
