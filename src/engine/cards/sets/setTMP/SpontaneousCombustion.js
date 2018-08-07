"use strict";
const Constants = require ("../../../Constants");
const SpontaneousCombustionBase = require("../setCNS/SpontaneousCombustion");

class SpontaneousCombustion extends SpontaneousCombustionBase {
  constructor (game) {
    super(game, "Spontaneous Combustion", "Tempest", "TMP");
  }
}

module.exports = SpontaneousCombustion;
