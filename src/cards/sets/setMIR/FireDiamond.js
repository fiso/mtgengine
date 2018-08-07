"use strict";
const Constants = require ("../../../Constants");
const FireDiamondBase = require("../setCM2/FireDiamond");

class FireDiamond extends FireDiamondBase {
  constructor (game) {
    super(game, "Fire Diamond", "Mirage", "MIR");
  }
}

module.exports = FireDiamond;
