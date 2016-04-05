"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryPlunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Memory Plunder", "Shadowmoor", "SHM");
  }
}

module.exports = MemoryPlunder;
