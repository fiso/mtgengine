"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../set6ED/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Eighth Edition", "8ED");
  }
}

module.exports = Flight;
