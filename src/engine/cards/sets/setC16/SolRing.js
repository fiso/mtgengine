"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setC18/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Commander 2016", "C16");
  }
}

module.exports = SolRing;
