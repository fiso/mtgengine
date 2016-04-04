"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../set6ED/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor(game) {
    super(game, "Memory Lapse", "Mirage", "MIR");
  }
}

module.exports = MemoryLapse;
