"use strict";
const Constants = require ("../../../Constants");
const SkyDiamondBase = require("../setC14/SkyDiamond");

class SkyDiamond extends SkyDiamondBase {
  constructor (game) {
    super(game, "Sky Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = SkyDiamond;
