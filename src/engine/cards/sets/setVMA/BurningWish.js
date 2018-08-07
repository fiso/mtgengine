"use strict";
const Constants = require ("../../../Constants");
const BurningWishBase = require("../setCN2/BurningWish");

class BurningWish extends BurningWishBase {
  constructor (game) {
    super(game, "Burning Wish", "Vintage Masters", "VMA");
  }
}

module.exports = BurningWish;
