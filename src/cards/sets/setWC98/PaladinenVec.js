"use strict";
const Constants = require ("../../../Constants");
const PaladinenVecBase = require("../setTPR/PaladinenVec");

class PaladinenVec extends PaladinenVecBase {
  constructor (game) {
    super(game, "Paladin en-Vec", "World Championship Decks 1998", "WC98");
  }
}

module.exports = PaladinenVec;
