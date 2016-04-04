"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemorySluice extends Card {
  constructor(game) {
    super(game, "Memory Sluice", "Shadowmoor", "SHM");
  }
}

module.exports = MemorySluice;
