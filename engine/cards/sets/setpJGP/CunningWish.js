"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningWish extends UnimplementedCard {
  constructor(game) {
    super(game, "Cunning Wish", "Judge Gift Program", "pJGP");
  }
}

module.exports = CunningWish;
