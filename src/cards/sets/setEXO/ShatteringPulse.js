"use strict";
const Constants = require ("../../../Constants");
const ShatteringPulseBase = require("../setWC99/ShatteringPulse");

class ShatteringPulse extends ShatteringPulseBase {
  constructor (game) {
    super(game, "Shattering Pulse", "Exodus", "EXO");
  }
}

module.exports = ShatteringPulse;
