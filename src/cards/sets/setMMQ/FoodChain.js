"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoodChain extends UnimplementedCard {
  constructor (game) {
    super(game, "Food Chain", "Mercadian Masques", "MMQ");
  }
}

module.exports = FoodChain;
