"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCM2/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor (game) {
    super(game, "Dark Hatchling", "Planechase 2012", "PC2");
  }
}

module.exports = DarkHatchling;
