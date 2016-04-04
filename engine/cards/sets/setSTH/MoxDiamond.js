"use strict";
const Constants = require ("../../../Constants");
const MoxDiamondBase = require("../setV10/MoxDiamond");

class MoxDiamond extends MoxDiamondBase {
  constructor(game) {
    super(game, "Mox Diamond", "Stronghold", "STH");
  }
}

module.exports = MoxDiamond;
