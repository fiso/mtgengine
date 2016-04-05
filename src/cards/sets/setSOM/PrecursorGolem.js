"use strict";
const Constants = require ("../../../Constants");
const PrecursorGolemBase = require("../setMM2/PrecursorGolem");

class PrecursorGolem extends PrecursorGolemBase {
  constructor(game) {
    super(game, "Precursor Golem", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PrecursorGolem;
