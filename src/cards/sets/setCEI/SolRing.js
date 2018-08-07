"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setC18/SolRing");

class SolRing extends SolRingBase {
  constructor (game) {
    super(game, "Sol Ring", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SolRing;
