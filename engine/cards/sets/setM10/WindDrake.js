"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindDrakeBase = require("../setBRB/WindDrake.js");

class WindDrake extends WindDrakeBase {
  constructor(game) {
    super(game, "Wind Drake", "Magic 2010", "M10");
  }
}

module.exports = WindDrake;
