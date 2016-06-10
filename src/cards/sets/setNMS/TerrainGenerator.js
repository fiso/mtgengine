"use strict";
const Constants = require ("../../../Constants");
const TerrainGeneratorBase = require("../setDD3_JVC/TerrainGenerator");

class TerrainGenerator extends TerrainGeneratorBase {
  constructor (game) {
    super(game, "Terrain Generator", "Nemesis", "NMS");
  }
}

module.exports = TerrainGenerator;
