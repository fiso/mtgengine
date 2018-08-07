"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = Spirit;
