"use strict";
const Constants = require ("../../../Constants");
const ChaosOrbBase = require("../setCED/ChaosOrb");

class ChaosOrb extends ChaosOrbBase {
  constructor (game) {
    super(game, "Chaos Orb", "International Collector's Edition", "CEI");
  }
}

module.exports = ChaosOrb;
