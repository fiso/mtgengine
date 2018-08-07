"use strict";
const Constants = require ("../../../Constants");
const CharcoalDiamondBase = require("../setC14/CharcoalDiamond");

class CharcoalDiamond extends CharcoalDiamondBase {
  constructor (game) {
    super(game, "Charcoal Diamond", "Mirage", "MIR");
  }
}

module.exports = CharcoalDiamond;
