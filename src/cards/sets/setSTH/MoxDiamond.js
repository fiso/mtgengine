"use strict";
const Constants = require ("../../../Constants");
const MoxDiamondBase = require("../setTPR/MoxDiamond");

class MoxDiamond extends MoxDiamondBase {
  constructor (game) {
    super(game, "Mox Diamond", "Stronghold", "STH");
  }
}

module.exports = MoxDiamond;
