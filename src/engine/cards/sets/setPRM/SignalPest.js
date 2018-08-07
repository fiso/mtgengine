"use strict";
const Constants = require ("../../../Constants");
const SignalPestBase = require("../setMBS/SignalPest");

class SignalPest extends SignalPestBase {
  constructor (game) {
    super(game, "Signal Pest", "Magic Online Promos", "PRM");
  }
}

module.exports = SignalPest;
