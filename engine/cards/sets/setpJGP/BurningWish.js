"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningWish extends Card {
  constructor(game) {
    super(game, "Burning Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = BurningWish;
