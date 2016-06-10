"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Commander 2014", "C14");
  }
}

module.exports = SolRing;
