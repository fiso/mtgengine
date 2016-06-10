"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Commander 2015", "C15");
  }
}

module.exports = SolRing;
