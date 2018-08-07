"use strict";
const Constants = require ("../../../Constants");
const VowofFlightBase = require("../setC18/VowofFlight");

class VowofFlight extends VowofFlightBase {
  constructor (game) {
    super(game, "Vow of Flight", "Commander 2011", "CMD");
  }
}

module.exports = VowofFlight;
