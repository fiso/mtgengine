"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SolRing;
