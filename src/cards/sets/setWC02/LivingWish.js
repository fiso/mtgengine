"use strict";
const Constants = require ("../../../Constants");
const LivingWishBase = require("../setA25/LivingWish");

class LivingWish extends LivingWishBase {
  constructor (game) {
    super(game, "Living Wish", "World Championship Decks 2002", "WC02");
  }
}

module.exports = LivingWish;
