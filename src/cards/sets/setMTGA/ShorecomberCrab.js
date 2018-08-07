"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShorecomberCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Shorecomber Crab", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = ShorecomberCrab;
