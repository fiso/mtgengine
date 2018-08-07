"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Wish", "Masters 25", "A25");
  }
}

module.exports = LivingWish;
