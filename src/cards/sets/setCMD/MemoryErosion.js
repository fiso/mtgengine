"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryErosion extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Erosion", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MemoryErosion;
