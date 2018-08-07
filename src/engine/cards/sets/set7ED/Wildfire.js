"use strict";
const Constants = require ("../../../Constants");
const WildfireBase = require("../setMM2/Wildfire");

class Wildfire extends WildfireBase {
  constructor (game) {
    super(game, "Wildfire", "Seventh Edition", "7ED");
  }
}

module.exports = Wildfire;
