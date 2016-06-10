"use strict";
const Constants = require ("../../../Constants");
const CharcoalDiamondBase = require("../set6ED/CharcoalDiamond");

class CharcoalDiamond extends CharcoalDiamondBase {
  constructor (game) {
    super(game, "Charcoal Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = CharcoalDiamond;
