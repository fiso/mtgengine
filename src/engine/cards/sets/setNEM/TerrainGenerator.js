"use strict";
const Constants = require ("../../../Constants");
const TerrainGeneratorBase = require("../setJVC/TerrainGenerator");

class TerrainGenerator extends TerrainGeneratorBase {
  constructor (game) {
    super(game, "Terrain Generator", "Nemesis", "NEM");
  }
}

module.exports = TerrainGenerator;
