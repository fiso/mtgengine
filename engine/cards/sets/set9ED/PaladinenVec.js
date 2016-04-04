"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PaladinenVecBase = require("../setEXO/PaladinenVec.js");

class PaladinenVec extends PaladinenVecBase {
  constructor(game) {
    super(game, "Paladin en-Vec", "Ninth Edition", "9ED");
  }
}

module.exports = PaladinenVec;
