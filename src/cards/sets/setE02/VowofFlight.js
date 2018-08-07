"use strict";
const Constants = require ("../../../Constants");
const VowofFlightBase = require("../setC18/VowofFlight");

class VowofFlight extends VowofFlightBase {
  constructor (game) {
    super(game, "Vow of Flight", "Explorers of Ixalan", "E02");
  }
}

module.exports = VowofFlight;
