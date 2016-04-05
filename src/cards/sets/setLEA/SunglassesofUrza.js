"use strict";
const Constants = require ("../../../Constants");
const SunglassesofUrzaBase = require("../setCED/SunglassesofUrza");

class SunglassesofUrza extends SunglassesofUrzaBase {
  constructor(game) {
    super(game, "Sunglasses of Urza", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SunglassesofUrza;
