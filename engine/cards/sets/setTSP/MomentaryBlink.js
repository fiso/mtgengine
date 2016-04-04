"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MomentaryBlinkBase = require("../setDDQ/MomentaryBlink.js");

class MomentaryBlink extends MomentaryBlinkBase {
  constructor(game) {
    super(game, "Momentary Blink", "Time Spiral", "TSP");
  }
}

module.exports = MomentaryBlink;
