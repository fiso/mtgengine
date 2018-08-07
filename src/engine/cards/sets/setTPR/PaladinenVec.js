"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaladinenVec extends UnimplementedCard {
  constructor (game) {
    super(game, "Paladin en-Vec", "Tempest Remastered", "TPR");
  }
}

module.exports = PaladinenVec;
