"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiversFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "River's Favor", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = RiversFavor;
