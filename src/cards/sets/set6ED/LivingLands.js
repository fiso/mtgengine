"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingLands extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Lands", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LivingLands;
