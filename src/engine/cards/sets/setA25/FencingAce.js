"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FencingAce extends UnimplementedCard {
  constructor (game) {
    super(game, "Fencing Ace", "Masters 25", "A25");
  }
}

module.exports = FencingAce;
