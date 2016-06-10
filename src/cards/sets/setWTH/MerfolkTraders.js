"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkTraders extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Traders", "Weatherlight", "WTH");
  }
}

module.exports = MerfolkTraders;
