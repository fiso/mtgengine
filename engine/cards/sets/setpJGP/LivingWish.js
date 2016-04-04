"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingWish extends Card {
  constructor(game) {
    super(game, "Living Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = LivingWish;
