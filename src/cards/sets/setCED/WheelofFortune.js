"use strict";
const Constants = require ("../../../Constants");
const WheelofFortuneBase = require("../setVMA/WheelofFortune");

class WheelofFortune extends WheelofFortuneBase {
  constructor (game) {
    super(game, "Wheel of Fortune", "Collectors’ Edition", "CED");
  }
}

module.exports = WheelofFortune;
