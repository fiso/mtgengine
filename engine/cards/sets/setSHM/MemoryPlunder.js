"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemoryPlunder extends Card {
  constructor(game) {
    super(game, "Memory Plunder", "Shadowmoor", "SHM");
  }
}

module.exports = MemoryPlunder;
