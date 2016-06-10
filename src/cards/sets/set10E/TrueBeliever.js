"use strict";
const Constants = require ("../../../Constants");
const TrueBelieverBase = require("../setONS/TrueBeliever");

class TrueBeliever extends TrueBelieverBase {
  constructor (game) {
    super(game, "True Believer", "Tenth Edition", "10E");
  }
}

module.exports = TrueBeliever;
