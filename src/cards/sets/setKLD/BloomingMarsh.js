"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloomingMarsh extends UnimplementedCard {
  constructor (game) {
    super(game, "Blooming Marsh", "Kaladesh", "KLD");
  }
}

module.exports = BloomingMarsh;
