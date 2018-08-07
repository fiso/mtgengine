"use strict";
const Constants = require ("../../../Constants");
const MorphicTideBase = require("../setPCA/MorphicTide");

class MorphicTide extends MorphicTideBase {
  constructor (game) {
    super(game, "Morphic Tide", "Planechase 2012", "PC2");
  }
}

module.exports = MorphicTide;
