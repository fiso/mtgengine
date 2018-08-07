"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../setM12/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Seventh Edition", "7ED");
  }
}

module.exports = Flight;
