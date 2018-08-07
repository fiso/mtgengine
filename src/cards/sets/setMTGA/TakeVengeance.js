"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakeVengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Take Vengeance", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = TakeVengeance;
