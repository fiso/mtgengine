"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrineKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrine Keeper", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = ShrineKeeper;
