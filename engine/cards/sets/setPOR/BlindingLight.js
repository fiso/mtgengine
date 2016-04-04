"use strict";
const Constants = require ("../../../Constants");
const BlindingLightBase = require("../setINV/BlindingLight");

class BlindingLight extends BlindingLightBase {
  constructor(game) {
    super(game, "Blinding Light", "Portal", "POR");
  }
}

module.exports = BlindingLight;
