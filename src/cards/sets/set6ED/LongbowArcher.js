"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LongbowArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Longbow Archer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LongbowArcher;
