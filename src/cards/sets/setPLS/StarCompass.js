"use strict";
const Constants = require ("../../../Constants");
const StarCompassBase = require("../set8ED/StarCompass");

class StarCompass extends StarCompassBase {
  constructor (game) {
    super(game, "Star Compass", "Planeshift", "PLS");
  }
}

module.exports = StarCompass;
