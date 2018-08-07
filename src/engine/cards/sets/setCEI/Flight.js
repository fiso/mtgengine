"use strict";
const Constants = require ("../../../Constants");
const FlightBase = require("../setM12/Flight");

class Flight extends FlightBase {
  constructor (game) {
    super(game, "Flight", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Flight;
