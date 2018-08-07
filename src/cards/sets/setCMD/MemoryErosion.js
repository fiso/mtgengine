"use strict";
const Constants = require ("../../../Constants");
const MemoryErosionBase = require("../setCM2/MemoryErosion");

class MemoryErosion extends MemoryErosionBase {
  constructor (game) {
    super(game, "Memory Erosion", "Commander 2011", "CMD");
  }
}

module.exports = MemoryErosion;
