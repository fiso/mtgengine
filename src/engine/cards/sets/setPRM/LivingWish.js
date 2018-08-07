"use strict";
const Constants = require ("../../../Constants");
const LivingWishBase = require("../setA25/LivingWish");

class LivingWish extends LivingWishBase {
  constructor (game) {
    super(game, "Living Wish", "Magic Online Promos", "PRM");
  }
}

module.exports = LivingWish;
