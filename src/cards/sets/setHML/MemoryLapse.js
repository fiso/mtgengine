"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../set6ED/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, "Memory Lapse", "Homelands", "HML");
  }
}

module.exports = MemoryLapse;
