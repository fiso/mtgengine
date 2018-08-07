"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Tangle Spider", "Tenth Edition", "10E");
  }
}

module.exports = TangleSpider;
