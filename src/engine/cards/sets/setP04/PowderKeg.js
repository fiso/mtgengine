"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowderKeg extends UnimplementedCard {
  constructor (game) {
    super(game, "Powder Keg", "Magic Player Rewards 2004", "P04");
  }
}

module.exports = PowderKeg;
