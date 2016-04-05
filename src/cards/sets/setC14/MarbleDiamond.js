"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../set6ED/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor(game) {
    super(game, "Marble Diamond", "Commander 2014", "C14");
  }
}

module.exports = MarbleDiamond;
