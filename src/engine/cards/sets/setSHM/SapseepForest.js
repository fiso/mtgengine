"use strict";
const Constants = require ("../../../Constants");
const SapseepForestBase = require("../setDDH/SapseepForest");

class SapseepForest extends SapseepForestBase {
  constructor (game) {
    super(game, "Sapseep Forest", "Shadowmoor", "SHM");
  }
}

module.exports = SapseepForest;
