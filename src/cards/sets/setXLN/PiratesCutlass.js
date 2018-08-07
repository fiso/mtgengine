"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiratesCutlass extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate's Cutlass", "Ixalan", "XLN");
  }
}

module.exports = PiratesCutlass;
