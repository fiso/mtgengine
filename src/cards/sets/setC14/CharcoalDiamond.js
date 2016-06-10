"use strict";
const Constants = require ("../../../Constants");
const CharcoalDiamondBase = require("../set6ED/CharcoalDiamond");

class CharcoalDiamond extends CharcoalDiamondBase {
  constructor (game) {
    super(game, "Charcoal Diamond", "Commander 2014", "C14");
  }
}

module.exports = CharcoalDiamond;
