"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindDrakeBase = require("../setBRB/WindDrake.js");

class WindDrake extends WindDrakeBase {
  constructor(game) {
    super(game, "Wind Drake", "Starter 1999", "S99");
  }
}

module.exports = WindDrake;
