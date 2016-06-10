"use strict";
const Constants = require ("../../../Constants");
const WheelofFortuneBase = require("../setCED/WheelofFortune");

class WheelofFortune extends WheelofFortuneBase {
  constructor (game) {
    super(game, "Wheel of Fortune", "Vintage Masters", "VMA");
  }
}

module.exports = WheelofFortune;
