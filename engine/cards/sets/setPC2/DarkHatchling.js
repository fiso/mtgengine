"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCMD/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor(game) {
    super(game, "Dark Hatchling", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DarkHatchling;
