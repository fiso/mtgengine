"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthquakeBase = require("../set6ED/Earthquake.js");

class Earthquake extends EarthquakeBase {
  constructor(game) {
    super(game, "Earthquake", "Revised Edition", "3ED");
  }
}

module.exports = Earthquake;
