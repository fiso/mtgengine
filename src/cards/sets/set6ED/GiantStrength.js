"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Strength", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GiantStrength;
