"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AltarsReap extends UnimplementedCard {
  constructor (game) {
    super(game, "Altar's Reap", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = AltarsReap;
