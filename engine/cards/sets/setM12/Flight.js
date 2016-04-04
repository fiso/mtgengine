"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlightBase = require("../set6ED/Flight.js");

class Flight extends FlightBase {
  constructor(game) {
    super(game, "Flight", "Magic 2012", "M12");
  }
}

module.exports = Flight;
