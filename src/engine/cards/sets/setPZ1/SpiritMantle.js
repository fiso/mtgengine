"use strict";
const Constants = require ("../../../Constants");
const SpiritMantleBase = require("../setPCA/SpiritMantle");

class SpiritMantle extends SpiritMantleBase {
  constructor (game) {
    super(game, "Spirit Mantle", "Legendary Cube", "PZ1");
  }
}

module.exports = SpiritMantle;
