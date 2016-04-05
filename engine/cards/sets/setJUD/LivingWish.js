"use strict";
const Constants = require ("../../../Constants");
const LivingWishBase = require("../setpJGP/LivingWish");

class LivingWish extends LivingWishBase {
  constructor(game) {
    super(game, "Living Wish", "Judgment", "JUD");
  }
}

module.exports = LivingWish;
