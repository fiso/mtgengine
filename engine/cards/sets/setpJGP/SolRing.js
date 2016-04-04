"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "Judge Gift Program", "pJGP");
  }
}

module.exports = SolRing;
