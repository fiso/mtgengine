"use strict";
const Constants = require ("../../../Constants");
const SomberHoverguardBase = require("../setMM2/SomberHoverguard");

class SomberHoverguard extends SomberHoverguardBase {
  constructor (game) {
    super(game, "Somber Hoverguard", "World Championship Decks 2004", "WC04");
  }
}

module.exports = SomberHoverguard;
