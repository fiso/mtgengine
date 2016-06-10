"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummerBloom extends UnimplementedCard {
  constructor (game) {
    super(game, "Summer Bloom", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SummerBloom;
