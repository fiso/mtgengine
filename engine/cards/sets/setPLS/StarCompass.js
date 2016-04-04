"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StarCompassBase = require("../set8ED/StarCompass.js");

class StarCompass extends StarCompassBase {
  constructor(game) {
    super(game, "Star Compass", "Planeshift", "PLS");
  }
}

module.exports = StarCompass;
