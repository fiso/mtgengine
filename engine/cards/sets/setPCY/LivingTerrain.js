"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingTerrainBase = require("../set8ED/LivingTerrain.js");

class LivingTerrain extends LivingTerrainBase {
  constructor(game) {
    super(game, "Living Terrain", "Prophecy", "PCY");
  }
}

module.exports = LivingTerrain;
