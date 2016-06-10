"use strict";
const Constants = require ("../../../Constants");
const WildfireBase = require("../setMM2/Wildfire");

class Wildfire extends WildfireBase {
  constructor (game) {
    super(game, "Wildfire", "Portal Second Age", "PO2");
  }
}

module.exports = Wildfire;
