"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaosOrbBase = require("../setCED/ChaosOrb.js");

class ChaosOrb extends ChaosOrbBase {
  constructor(game) {
    super(game, "Chaos Orb", "Limited Edition Beta", "LEB");
  }
}

module.exports = ChaosOrb;
