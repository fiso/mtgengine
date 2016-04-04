"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SignalPestBase = require("../setMBS/SignalPest.js");

class SignalPest extends SignalPestBase {
  constructor(game) {
    super(game, "Signal Pest", "WPN and Gateway", "pWPN");
  }
}

module.exports = SignalPest;
