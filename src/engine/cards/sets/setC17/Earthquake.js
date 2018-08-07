"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../setCM2/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "Commander 2017", "C17");
  }
}

module.exports = Earthquake;
