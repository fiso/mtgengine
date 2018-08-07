"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../setEMA/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, "Memory Lapse", "World Championship Decks 2002", "WC02");
  }
}

module.exports = MemoryLapse;
