"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnderworldCoinsmithBase = require("../setC15/UnderworldCoinsmith.js");

class UnderworldCoinsmith extends UnderworldCoinsmithBase {
  constructor(game) {
    super(game, "Underworld Coinsmith", "Journey into Nyx", "JOU");
  }
}

module.exports = UnderworldCoinsmith;
