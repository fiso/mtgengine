"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolRingBase = require("../setCED/SolRing.js");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "Commander 2015", "C15");
  }
}

module.exports = SolRing;
