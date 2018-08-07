"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningWish extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Wish", "Judge Gift Cards 2007", "G07");
  }
}

module.exports = CunningWish;
