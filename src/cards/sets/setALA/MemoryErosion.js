"use strict";
const Constants = require ("../../../Constants");
const MemoryErosionBase = require("../setCM2/MemoryErosion");

class MemoryErosion extends MemoryErosionBase {
  constructor (game) {
    super(game, "Memory Erosion", "Shards of Alara", "ALA");
  }
}

module.exports = MemoryErosion;
