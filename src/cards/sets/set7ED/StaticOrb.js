"use strict";
const Constants = require ("../../../Constants");
const StaticOrbBase = require("../setMPS/StaticOrb");

class StaticOrb extends StaticOrbBase {
  constructor (game) {
    super(game, "Static Orb", "Seventh Edition", "7ED");
  }
}

module.exports = StaticOrb;
