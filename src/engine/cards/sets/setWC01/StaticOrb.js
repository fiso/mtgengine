"use strict";
const Constants = require ("../../../Constants");
const StaticOrbBase = require("../setMPS/StaticOrb");

class StaticOrb extends StaticOrbBase {
  constructor (game) {
    super(game, "Static Orb", "World Championship Decks 2001", "WC01");
  }
}

module.exports = StaticOrb;
