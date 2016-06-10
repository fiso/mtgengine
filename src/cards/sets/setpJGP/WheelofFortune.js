"use strict";
const Constants = require ("../../../Constants");
const WheelofFortuneBase = require("../setCED/WheelofFortune");

class WheelofFortune extends WheelofFortuneBase {
  constructor (game) {
    super(game, "Wheel of Fortune", "Judge Gift Program", "pJGP");
  }
}

module.exports = WheelofFortune;
