"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setKLD/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor (game) {
    super(game, "Wind Drake", "Magic 2010", "M10");
  }
}

module.exports = WindDrake;
