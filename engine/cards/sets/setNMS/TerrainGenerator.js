"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerrainGeneratorBase = require("../setDD3_JVC/TerrainGenerator.js");

class TerrainGenerator extends TerrainGeneratorBase {
  constructor(game) {
    super(game, "Terrain Generator", "Nemesis", "NMS");
  }
}

module.exports = TerrainGenerator;
