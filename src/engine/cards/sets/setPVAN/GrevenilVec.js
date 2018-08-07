"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrevenilVec extends UnimplementedCard {
  constructor (game) {
    super(game, "Greven il-Vec", "Vanguard Series", "PVAN");
  }
}

module.exports = GrevenilVec;
