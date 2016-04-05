"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setBRB/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor(game) {
    super(game, "Wind Drake", "Ninth Edition", "9ED");
  }
}

module.exports = WindDrake;
