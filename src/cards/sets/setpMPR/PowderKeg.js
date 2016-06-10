"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowderKeg extends UnimplementedCard {
  constructor (game) {
    super(game, "Powder Keg", "Magic Player Rewards", "pMPR");
  }
}

module.exports = PowderKeg;
