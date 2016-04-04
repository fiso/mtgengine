"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwilightsCallBase = require("../setDDJ/TwilightsCall.js");

class TwilightsCall extends TwilightsCallBase {
  constructor(game) {
    super(game, "Twilight's Call", "Invasion", "INV");
  }
}

module.exports = TwilightsCall;
