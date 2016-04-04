"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Swamp;
