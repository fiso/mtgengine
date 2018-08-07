"use strict";
const Constants = require ("../../../Constants");
const ShadowedCaravelBase = require("../setXLN/ShadowedCaravel");

class ShadowedCaravel extends ShadowedCaravelBase {
  constructor (game) {
    super(game, "Shadowed Caravel", "Ixalan Promos", "PXLN");
  }
}

module.exports = ShadowedCaravel;
