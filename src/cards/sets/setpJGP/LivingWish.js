"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = LivingWish;
