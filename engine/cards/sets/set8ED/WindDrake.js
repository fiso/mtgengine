"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setBRB/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor(game) {
    super(game, "Wind Drake", "Eighth Edition", "8ED");
  }
}

module.exports = WindDrake;
