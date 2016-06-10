"use strict";
const Constants = require ("../../../Constants");
const SkyDiamondBase = require("../set6ED/SkyDiamond");

class SkyDiamond extends SkyDiamondBase {
  constructor (game) {
    super(game, "Sky Diamond", "Mirage", "MIR");
  }
}

module.exports = SkyDiamond;
