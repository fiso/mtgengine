"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingWishBase = require("../setpJGP/LivingWish.js");

class LivingWish extends LivingWishBase {
  constructor(game) {
    super(game, "Living Wish", "Judgment", "JUD");
  }
}

module.exports = LivingWish;
