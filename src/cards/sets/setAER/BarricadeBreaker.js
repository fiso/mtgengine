"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarricadeBreaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Barricade Breaker", "Aether Revolt", "AER");
  }
}

module.exports = BarricadeBreaker;
