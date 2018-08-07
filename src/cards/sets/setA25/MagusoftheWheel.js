"use strict";
const Constants = require ("../../../Constants");
const MagusoftheWheelBase = require("../setCM2/MagusoftheWheel");

class MagusoftheWheel extends MagusoftheWheelBase {
  constructor (game) {
    super(game, "Magus of the Wheel", "Masters 25", "A25");
  }
}

module.exports = MagusoftheWheel;
