"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornBrownie extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Brownie", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FyndhornBrownie;
