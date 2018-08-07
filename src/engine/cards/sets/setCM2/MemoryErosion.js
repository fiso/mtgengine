"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemoryErosion extends UnimplementedCard {
  constructor (game) {
    super(game, "Memory Erosion", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MemoryErosion;
