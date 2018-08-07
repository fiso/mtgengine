"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setKLD/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor (game) {
    super(game, "Wind Drake", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WindDrake;
