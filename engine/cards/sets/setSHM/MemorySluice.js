"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorySluice extends UnimplementedCard {
  constructor(game) {
    super(game, "Memory Sluice", "Shadowmoor", "SHM");
  }
}

module.exports = MemorySluice;
