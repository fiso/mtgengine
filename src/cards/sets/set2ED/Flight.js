"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../set6ED/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Unlimited Edition", "2ED");
  }
}

module.exports = Flight;
