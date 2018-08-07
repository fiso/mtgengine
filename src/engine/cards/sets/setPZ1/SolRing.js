"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setC18/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Legendary Cube", "PZ1");
  }
}

module.exports = SolRing;
