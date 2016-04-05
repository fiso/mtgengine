"use strict";
const Constants = require ("../../../Constants");
const ChaosOrbBase = require("../setCED/ChaosOrb");

class ChaosOrb extends ChaosOrbBase {
  constructor(game) {
    super(game, "Chaos Orb", "Unlimited Edition", "2ED");
  }
}

module.exports = ChaosOrb;
