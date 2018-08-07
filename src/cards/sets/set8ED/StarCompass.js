"use strict";
const Constants = require ("../../../Constants");
const StarCompassBase = require("../setIMA/StarCompass");

class StarCompass extends StarCompassBase {
  constructor (game) {
    super(game, "Star Compass", "Eighth Edition", "8ED");
  }
}

module.exports = StarCompass;
