"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../setEMA/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor (game) {
    super(game, "Memory Lapse", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MemoryLapse;
