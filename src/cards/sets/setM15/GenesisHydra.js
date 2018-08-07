"use strict";
const Constants = require ("../../../Constants");
const GenesisHydraBase = require("../setIMA/GenesisHydra");

class GenesisHydra extends GenesisHydraBase {
  constructor (game) {
    super(game, "Genesis Hydra", "Magic 2015", "M15");
  }
}

module.exports = GenesisHydra;
