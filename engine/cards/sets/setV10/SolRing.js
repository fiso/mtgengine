"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolRingBase = require("../setCED/SolRing.js");

class SolRing extends SolRingBase {
  constructor(game) {
    super(game, "Sol Ring", "From the Vault: Relics", "V10");
  }
}

module.exports = SolRing;
