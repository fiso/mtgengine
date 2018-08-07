"use strict";
const Constants = require ("../../../Constants");
const BurningWishBase = require("../setCN2/BurningWish");

class BurningWish extends BurningWishBase {
  constructor (game) {
    super(game, "Burning Wish", "Judgment", "JUD");
  }
}

module.exports = BurningWish;
