"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightsPledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight's Pledge", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = KnightsPledge;
