"use strict";
const Constants = require ("../../../Constants");
const RakdosDrakeBase = require("../setIMA/RakdosDrake");

class RakdosDrake extends RakdosDrakeBase {
  constructor (game) {
    super(game, "Rakdos Drake", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosDrake;
