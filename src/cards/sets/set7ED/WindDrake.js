"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setKLD/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor (game) {
    super(game, "Wind Drake", "Seventh Edition", "7ED");
  }
}

module.exports = WindDrake;
