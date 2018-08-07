"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCM2/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor (game) {
    super(game, "Dark Hatchling", "Vintage Masters", "VMA");
  }
}

module.exports = DarkHatchling;
