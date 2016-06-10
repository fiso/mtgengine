"use strict";
const Constants = require ("../../../Constants");
const ChaosOrbBase = require("../setCED/ChaosOrb");

class ChaosOrb extends ChaosOrbBase {
  constructor (game) {
    super(game, "Chaos Orb", "Limited Edition Beta", "LEB");
  }
}

module.exports = ChaosOrb;
