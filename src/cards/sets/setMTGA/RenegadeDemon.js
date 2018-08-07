"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Renegade Demon", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = RenegadeDemon;
