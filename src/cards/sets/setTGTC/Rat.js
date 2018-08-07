"use strict";
const Constants = require ("../../../Constants");
const RatBase = require("../setTC17/Rat");

class Rat extends RatBase {
  constructor (game) {
    super(game, "Rat", "Gatecrash Tokens", "TGTC");
  }
}

module.exports = Rat;
