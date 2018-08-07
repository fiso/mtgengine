"use strict";
const Constants = require ("../../../Constants");
const ChaosOrbBase = require("../setCEI/ChaosOrb");

class ChaosOrb extends ChaosOrbBase {
  constructor (game) {
    super(game, "Chaos Orb", "Collectors’ Edition", "CED");
  }
}

module.exports = ChaosOrb;
