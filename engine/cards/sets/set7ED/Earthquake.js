"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../set6ED/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor(game) {
    super(game, "Earthquake", "Seventh Edition", "7ED");
  }
}

module.exports = Earthquake;
