"use strict";
const Constants = require ("../../../Constants");
const EarthquakeBase = require("../setCM2/Earthquake");

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, "Earthquake", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Earthquake;
