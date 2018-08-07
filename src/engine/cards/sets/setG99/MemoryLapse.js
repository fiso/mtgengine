"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../setEMA/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, "Memory Lapse", "Judge Gift Cards 1999", "G99");
  }
}

module.exports = MemoryLapse;
