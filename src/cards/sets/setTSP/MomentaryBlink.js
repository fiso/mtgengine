"use strict";
const Constants = require ("../../../Constants");
const MomentaryBlinkBase = require("../setDDQ/MomentaryBlink");

class MomentaryBlink extends MomentaryBlinkBase {
  constructor(game) {
    super(game, "Momentary Blink", "Time Spiral", "TSP");
  }
}

module.exports = MomentaryBlink;
