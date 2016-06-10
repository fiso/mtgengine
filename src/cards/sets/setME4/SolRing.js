"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Masters Edition IV", "ME4");
  }
}

module.exports = SolRing;
