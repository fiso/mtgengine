"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../setDVD/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Mirage", "MIR");
  }
}

module.exports = MarbleDiamond;
