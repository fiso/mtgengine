"use strict";
const Constants = require ("../../../Constants");
const SkyDiamondBase = require("../setC14/SkyDiamond");

class SkyDiamond extends SkyDiamondBase {
  constructor (game) {
    super(game, "Sky Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SkyDiamond;
