"use strict";
const Constants = require ("../../../Constants");
const DarkHatchlingBase = require("../setCM2/DarkHatchling");

class DarkHatchling extends DarkHatchlingBase {
  constructor (game) {
    super(game, "Dark Hatchling", "Commander 2011", "CMD");
  }
}

module.exports = DarkHatchling;
