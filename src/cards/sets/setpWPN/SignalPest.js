"use strict";
const Constants = require ("../../../Constants");
const SignalPestBase = require("../setMBS/SignalPest");

class SignalPest extends SignalPestBase {
  constructor(game) {
    super(game, "Signal Pest", "WPN and Gateway", "pWPN");
  }
}

module.exports = SignalPest;
