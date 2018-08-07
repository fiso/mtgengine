"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Strength", "Vintage Masters", "VMA");
  }
}

module.exports = GiantStrength;
