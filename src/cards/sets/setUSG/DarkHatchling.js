"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCMD/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor (game) {
    super(game, "Dark Hatchling", "Urza's Saga", "USG");
  }
}

module.exports = DarkHatchling;
