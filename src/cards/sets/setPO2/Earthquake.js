"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../set6ED/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor(game) {
    super(game, "Earthquake", "Portal Second Age", "PO2");
  }
}

module.exports = Earthquake;
