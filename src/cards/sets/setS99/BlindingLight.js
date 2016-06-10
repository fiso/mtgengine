"use strict";
const Constants = require ("../../../Constants");
const BlindingLightBase = require("../setINV/BlindingLight");

class BlindingLight extends BlindingLightBase {
  constructor (game) {
    super(game, "Blinding Light", "Starter 1999", "S99");
  }
}

module.exports = BlindingLight;
