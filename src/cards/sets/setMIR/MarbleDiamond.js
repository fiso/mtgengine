"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../set6ED/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Mirage", "MIR");
  }
}

module.exports = MarbleDiamond;
