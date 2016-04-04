"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../set6ED/Flight");

class Flight extends FlightBase {
  constructor(game) {
    super(game, "Flight", "Seventh Edition", "7ED");
  }
}

module.exports = Flight;
