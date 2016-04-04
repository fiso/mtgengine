"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "International Collector's Edition", "CEI");
  }
}

module.exports = SolRing;
