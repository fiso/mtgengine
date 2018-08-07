"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Divination extends UnimplementedCard {
  constructor (game) {
    super(game, "Divination", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = Divination;
