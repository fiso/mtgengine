"use strict";
const Constants = require ("../../../Constants");
const WinterOrbBase = require("../setEMA/WinterOrb");

class WinterOrb extends WinterOrbBase {
  constructor (game) {
    super(game, "Winter Orb", "World Championship Decks 1997", "WC97");
  }
}

module.exports = WinterOrb;
