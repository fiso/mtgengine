"use strict";
const Constants = require ("../../../Constants");
const ShatteringPulseBase = require("../setWC99/ShatteringPulse");

class ShatteringPulse extends ShatteringPulseBase {
  constructor (game) {
    super(game, "Shattering Pulse", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ShatteringPulse;
