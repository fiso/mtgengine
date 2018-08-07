"use strict";
const Constants = require ("../../../Constants");
const BurningWishBase = require("../setCN2/BurningWish");

class BurningWish extends BurningWishBase {
  constructor (game) {
    super(game, "Burning Wish", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = BurningWish;
