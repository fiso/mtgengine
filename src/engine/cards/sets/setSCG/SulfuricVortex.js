"use strict";
const Constants = require ("../../../Constants");
const SulfuricVortexBase = require("../setEMA/SulfuricVortex");

class SulfuricVortex extends SulfuricVortexBase {
  constructor (game) {
    super(game, "Sulfuric Vortex", "Scourge", "SCG");
  }
}

module.exports = SulfuricVortex;
