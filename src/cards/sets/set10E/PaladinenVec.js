"use strict";
const Constants = require ("../../../Constants");
const PaladinenVecBase = require("../setEXO/PaladinenVec");

class PaladinenVec extends PaladinenVecBase {
  constructor (game) {
    super(game, "Paladin en-Vec", "Tenth Edition", "10E");
  }
}

module.exports = PaladinenVec;
