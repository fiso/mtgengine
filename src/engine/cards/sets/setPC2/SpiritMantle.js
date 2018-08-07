"use strict";
const Constants = require ("../../../Constants");
const SpiritMantleBase = require("../setPCA/SpiritMantle");

class SpiritMantle extends SpiritMantleBase {
  constructor (game) {
    super(game, "Spirit Mantle", "Planechase 2012", "PC2");
  }
}

module.exports = SpiritMantle;
