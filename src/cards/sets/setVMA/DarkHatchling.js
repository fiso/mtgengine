"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCMD/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor (game) {
    super(game, "Dark Hatchling", "Vintage Masters", "VMA");
  }
}

module.exports = DarkHatchling;
