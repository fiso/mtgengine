"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../set6ED/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "International Collector's Edition", "CEI");
  }
}

module.exports = Earthquake;
