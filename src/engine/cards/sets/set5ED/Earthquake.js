"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../setCM2/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "Fifth Edition", "5ED");
  }
}

module.exports = Earthquake;
