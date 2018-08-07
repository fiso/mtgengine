"use strict";
const Constants = require ("../../../Constants");
const SkyDiamondBase = require("../setC14/SkyDiamond");

class SkyDiamond extends SkyDiamondBase {
  constructor (game) {
    super(game, "Sky Diamond", "World Championship Decks 2000", "WC00");
  }
}

module.exports = SkyDiamond;
