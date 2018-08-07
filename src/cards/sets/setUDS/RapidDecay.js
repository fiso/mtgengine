"use strict";
const Constants = require ("../../../Constants");
const RapidDecayBase = require("../setWC99/RapidDecay");

class RapidDecay extends RapidDecayBase {
  constructor (game) {
    super(game, "Rapid Decay", "Urza's Destiny", "UDS");
  }
}

module.exports = RapidDecay;
