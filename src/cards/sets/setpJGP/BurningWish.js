"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningWish extends UnimplementedCard {
  constructor(game) {
    super(game, "Burning Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = BurningWish;
