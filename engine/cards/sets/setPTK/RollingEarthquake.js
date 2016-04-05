"use strict";
const Constants = require ("../../../Constants");
const RollingEarthquakeBase = require("../setV14/RollingEarthquake");

class RollingEarthquake extends RollingEarthquakeBase {
  constructor(game) {
    super(game, "Rolling Earthquake", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RollingEarthquake;
