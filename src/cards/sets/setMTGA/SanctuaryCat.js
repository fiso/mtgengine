"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctuaryCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctuary Cat", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = SanctuaryCat;
