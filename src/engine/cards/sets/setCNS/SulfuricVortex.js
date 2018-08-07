"use strict";
const Constants = require ("../../../Constants");
const SulfuricVortexBase = require("../setEMA/SulfuricVortex");

class SulfuricVortex extends SulfuricVortexBase {
  constructor (game) {
    super(game, "Sulfuric Vortex", "Conspiracy", "CNS");
  }
}

module.exports = SulfuricVortex;
