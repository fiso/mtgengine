"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../set6ED/Flight");

class Flight extends FlightBase {
  constructor(game) {
    super(game, "Flight", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Flight;
