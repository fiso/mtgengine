"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaticOrbBase = require("../set7ED/StaticOrb.js");

class StaticOrb extends StaticOrbBase {
  constructor(game) {
    super(game, "Static Orb", "Tempest", "TMP");
  }
}

module.exports = StaticOrb;
