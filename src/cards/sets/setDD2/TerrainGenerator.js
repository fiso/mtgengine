"use strict";
const Constants = require ("../../../Constants");
const TerrainGeneratorBase = require("../setDD3_JVC/TerrainGenerator");

class TerrainGenerator extends TerrainGeneratorBase {
  constructor (game) {
    super(game, "Terrain Generator", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = TerrainGenerator;
