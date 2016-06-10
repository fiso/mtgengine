"use strict";
const Constants = require ("../../../Constants");
const FireDiamondBase = require("../set6ED/FireDiamond");

class FireDiamond extends FireDiamondBase {
  constructor (game) {
    super(game, "Fire Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = FireDiamond;
