"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../setCM2/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "Portal Second Age", "P02");
  }
}

module.exports = Earthquake;
