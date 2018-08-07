"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulhunterRakshasa extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulhunter Rakshasa", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = SoulhunterRakshasa;
