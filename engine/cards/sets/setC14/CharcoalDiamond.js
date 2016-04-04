"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CharcoalDiamondBase = require("../set6ED/CharcoalDiamond.js");

class CharcoalDiamond extends CharcoalDiamondBase {
  constructor(game) {
    super(game, "Charcoal Diamond", "Commander 2014", "C14");
  }
}

module.exports = CharcoalDiamond;
