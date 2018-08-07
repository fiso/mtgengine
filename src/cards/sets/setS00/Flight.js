"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../setM12/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Starter 2000", "S00");
  }
}

module.exports = Flight;
