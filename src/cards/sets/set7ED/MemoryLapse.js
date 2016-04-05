"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../set6ED/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor(game) {
    super(game, "Memory Lapse", "Seventh Edition", "7ED");
  }
}

module.exports = MemoryLapse;
