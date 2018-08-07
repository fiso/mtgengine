"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../setDVD/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MarbleDiamond;
