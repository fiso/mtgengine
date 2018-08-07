"use strict";
const Constants = require ("../../../Constants");
const WheelofFortuneBase = require("../setVMA/WheelofFortune");

class WheelofFortune extends WheelofFortuneBase {
  constructor (game) {
    super(game, "Wheel of Fortune", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = WheelofFortune;
