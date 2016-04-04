"use strict";
const Constants = require ("../../../Constants");
const MemoryLapseBase = require("../set6ED/MemoryLapse");

class MemoryLapse extends MemoryLapseBase {
  constructor(game) {
    super(game, "Memory Lapse", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MemoryLapse;
