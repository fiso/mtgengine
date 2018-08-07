"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RisefromtheGrave extends UnimplementedCard {
  constructor (game) {
    super(game, "Rise from the Grave", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = RisefromtheGrave;
