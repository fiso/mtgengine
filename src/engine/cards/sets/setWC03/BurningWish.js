"use strict";
const Constants = require ("../../../Constants");
const BurningWishBase = require("../setCN2/BurningWish");

class BurningWish extends BurningWishBase {
  constructor (game) {
    super(game, "Burning Wish", "World Championship Decks 2003", "WC03");
  }
}

module.exports = BurningWish;
