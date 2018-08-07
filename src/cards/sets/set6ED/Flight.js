"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../setM12/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flight;
