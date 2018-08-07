"use strict";
const Constants = require ("../../../Constants");
const SignalPestBase = require("../setMBS/SignalPest");

class SignalPest extends SignalPestBase {
  constructor (game) {
    super(game, "Signal Pest", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = SignalPest;
