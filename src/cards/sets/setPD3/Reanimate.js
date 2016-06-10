"use strict";
const Constants = require ("../../../Constants");
const ReanimateBase = require("../setARC/Reanimate");

class Reanimate extends ReanimateBase {
  constructor (game) {
    super(game, "Reanimate", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Reanimate;
