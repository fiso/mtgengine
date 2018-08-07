"use strict";
const Constants = require ("../../../Constants");
const GenesisHydraBase = require("../setIMA/GenesisHydra");

class GenesisHydra extends GenesisHydraBase {
  constructor (game) {
    super(game, "Genesis Hydra", "Magic Online Promos", "PRM");
  }
}

module.exports = GenesisHydra;
