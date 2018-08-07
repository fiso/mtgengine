"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmering Wings", "Tenth Edition", "10E");
  }
}

module.exports = ShimmeringWings;
