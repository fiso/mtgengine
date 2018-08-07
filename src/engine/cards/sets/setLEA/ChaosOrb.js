"use strict";
const Constants = require ("../../../Constants");
const ChaosOrbBase = require("../setCEI/ChaosOrb");

class ChaosOrb extends ChaosOrbBase {
  constructor (game) {
    super(game, "Chaos Orb", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ChaosOrb;
