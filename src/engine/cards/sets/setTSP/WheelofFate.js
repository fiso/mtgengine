"use strict";
const Constants = require ("../../../Constants");
const WheelofFateBase = require("../setC16/WheelofFate");

class WheelofFate extends WheelofFateBase {
  constructor (game) {
    super(game, "Wheel of Fate", "Time Spiral", "TSP");
  }
}

module.exports = WheelofFate;
