"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaladinenVec extends Card {
  constructor(game) {
    super(game, "Paladin en-Vec", "Exodus", "EXO");
  }
}

module.exports = PaladinenVec;
