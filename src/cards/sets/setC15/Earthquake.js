"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../set6ED/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "Commander 2015", "C15");
  }
}

module.exports = Earthquake;
