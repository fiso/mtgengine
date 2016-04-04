"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningWish extends Card {
  constructor(game) {
    super(game, "Cunning Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = CunningWish;
