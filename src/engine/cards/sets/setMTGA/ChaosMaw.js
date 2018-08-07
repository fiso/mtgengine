"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosMaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Maw", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = ChaosMaw;
