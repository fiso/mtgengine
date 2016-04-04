"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PaladinenVecBase = require("../setEXO/PaladinenVec.js");

class PaladinenVec extends PaladinenVecBase {
  constructor(game) {
    super(game, "Paladin en-Vec", "Tenth Edition", "10E");
  }
}

module.exports = PaladinenVec;
