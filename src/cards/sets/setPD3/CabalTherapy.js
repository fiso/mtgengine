"use strict";
const Constants = require ("../../../Constants");
const CabalTherapyBase = require("../setEMA/CabalTherapy");

class CabalTherapy extends CabalTherapyBase {
  constructor (game) {
    super(game, "Cabal Therapy", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = CabalTherapy;
