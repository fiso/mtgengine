"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemoryErosionBase = require("../setCMD/MemoryErosion.js");

class MemoryErosion extends MemoryErosionBase {
  constructor(game) {
    super(game, "Memory Erosion", "Shards of Alara", "ALA");
  }
}

module.exports = MemoryErosion;
