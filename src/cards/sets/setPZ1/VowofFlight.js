"use strict";
const Constants = require ("../../../Constants");
const VowofFlightBase = require("../setC18/VowofFlight");

class VowofFlight extends VowofFlightBase {
  constructor (game) {
    super(game, "Vow of Flight", "Legendary Cube", "PZ1");
  }
}

module.exports = VowofFlight;
