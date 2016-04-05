"use strict";
const Constants = require ("../../../Constants");
const RollingEarthquakeBase = require("../setV14/RollingEarthquake");

class RollingEarthquake extends RollingEarthquakeBase {
  constructor(game) {
    super(game, "Rolling Earthquake", "Masters Edition III", "ME3");
  }
}

module.exports = RollingEarthquake;
