"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralRoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Roar", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = FeralRoar;
