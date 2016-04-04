"use strict";
const Constants = require ("../../../Constants");
const SolRingBase = require("../setCED/SolRing");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "Unlimited Edition", "2ED");
  }
}

module.exports = SolRing;
