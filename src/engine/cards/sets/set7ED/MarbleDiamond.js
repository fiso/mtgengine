"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../setDVD/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = MarbleDiamond;
