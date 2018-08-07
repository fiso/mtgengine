"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../setEMA/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, "Memory Lapse", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MemoryLapse;
