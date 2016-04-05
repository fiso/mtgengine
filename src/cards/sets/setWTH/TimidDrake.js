"use strict";
const Constants = require ("../../../Constants");
const TimidDrakeBase = require("../setMMQ/TimidDrake");

class TimidDrake extends TimidDrakeBase {
  constructor(game) {
    super(game, "Timid Drake", "Weatherlight", "WTH");
  }
}

module.exports = TimidDrake;
