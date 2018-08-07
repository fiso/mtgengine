"use strict";
const Constants = require ("../../../Constants");
const MemoryPlunderBase = require("../setC17/MemoryPlunder");

class MemoryPlunder extends MemoryPlunderBase {
  constructor (game) {
    super(game, "Memory Plunder", "Shadowmoor", "SHM");
  }
}

module.exports = MemoryPlunder;
