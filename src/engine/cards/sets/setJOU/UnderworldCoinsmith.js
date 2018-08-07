"use strict";
const Constants = require ("../../../Constants");
const UnderworldCoinsmithBase = require("../setC15/UnderworldCoinsmith");

class UnderworldCoinsmith extends UnderworldCoinsmithBase {
  constructor (game) {
    super(game, "Underworld Coinsmith", "Journey into Nyx", "JOU");
  }
}

module.exports = UnderworldCoinsmith;
