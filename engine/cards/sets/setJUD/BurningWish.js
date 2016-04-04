"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurningWishBase = require("../setpJGP/BurningWish.js");

class BurningWish extends BurningWishBase {
  constructor(game) {
    super(game, "Burning Wish", "Judgment", "JUD");
  }
}

module.exports = BurningWish;
