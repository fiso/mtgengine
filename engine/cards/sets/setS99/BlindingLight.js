"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlindingLightBase = require("../setINV/BlindingLight.js");

class BlindingLight extends BlindingLightBase {
  constructor(game) {
    super(game, "Blinding Light", "Starter 1999", "S99");
  }
}

module.exports = BlindingLight;
