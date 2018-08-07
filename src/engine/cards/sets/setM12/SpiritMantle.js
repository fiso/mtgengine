"use strict";
const Constants = require ("../../../Constants");
const SpiritMantleBase = require("../setPCA/SpiritMantle");

class SpiritMantle extends SpiritMantleBase {
  constructor (game) {
    super(game, "Spirit Mantle", "Magic 2012", "M12");
  }
}

module.exports = SpiritMantle;
