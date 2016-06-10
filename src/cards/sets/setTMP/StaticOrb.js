"use strict";
const Constants = require ("../../../Constants");
const StaticOrbBase = require("../set7ED/StaticOrb");

class StaticOrb extends StaticOrbBase {
  constructor (game) {
    super(game, "Static Orb", "Tempest", "TMP");
  }
}

module.exports = StaticOrb;
