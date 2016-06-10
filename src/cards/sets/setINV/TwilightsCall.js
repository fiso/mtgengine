"use strict";
const Constants = require ("../../../Constants");
const TwilightsCallBase = require("../setDDJ/TwilightsCall");

class TwilightsCall extends TwilightsCallBase {
  constructor (game) {
    super(game, "Twilight's Call", "Invasion", "INV");
  }
}

module.exports = TwilightsCall;
