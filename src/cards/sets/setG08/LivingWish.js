"use strict";
const Constants = require ("../../../Constants");
const LivingWishBase = require("../setA25/LivingWish");

class LivingWish extends LivingWishBase {
  constructor (game) {
    super(game, "Living Wish", "Judge Gift Cards 2008", "G08");
  }
}

module.exports = LivingWish;
