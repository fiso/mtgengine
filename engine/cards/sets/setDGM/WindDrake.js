"use strict";
const Constants = require ("../../../Constants");
const WindDrakeBase = require("../setBRB/WindDrake");

class WindDrake extends WindDrakeBase {
  constructor(game) {
    super(game, "Wind Drake", "Dragon's Maze", "DGM");
  }
}

module.exports = WindDrake;
