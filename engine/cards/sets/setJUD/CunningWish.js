"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CunningWishBase = require("../setpJGP/CunningWish.js");

class CunningWish extends CunningWishBase {
  constructor(game) {
    super(game, "Cunning Wish", "Judgment", "JUD");
  }
}

module.exports = CunningWish;
