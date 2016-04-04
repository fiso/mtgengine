"use strict";
const Constants = require ("../../../Constants");
const LivingTerrainBase = require("../set8ED/LivingTerrain");

class LivingTerrain extends LivingTerrainBase {
  constructor(game) {
    super(game, "Living Terrain", "Prophecy", "PCY");
  }
}

module.exports = LivingTerrain;
