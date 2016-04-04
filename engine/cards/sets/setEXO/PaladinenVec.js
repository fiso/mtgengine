"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaladinenVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Paladin en-Vec", "Exodus", "EXO");
  }
}

module.exports = PaladinenVec;
