"use strict";
const Constants = require ("../../../Constants");
const CabalTherapyBase = require("../setEMA/CabalTherapy");

class CabalTherapy extends CabalTherapyBase {
  constructor (game) {
    super(game, "Cabal Therapy", "World Championship Decks 2003", "WC03");
  }
}

module.exports = CabalTherapy;
