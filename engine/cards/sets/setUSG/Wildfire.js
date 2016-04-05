"use strict";
const Constants = require ("../../../Constants");
const WildfireBase = require("../setMM2/Wildfire");

class Wildfire extends WildfireBase {
  constructor(game) {
    super(game, "Wildfire", "Urza's Saga", "USG");
  }
}

module.exports = Wildfire;
