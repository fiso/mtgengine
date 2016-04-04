"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemoryErosion extends Card {
  constructor(game) {
    super(game, "Memory Erosion", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MemoryErosion;
