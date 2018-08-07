"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doublecast extends UnimplementedCard {
  constructor (game) {
    super(game, "Doublecast", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = Doublecast;
