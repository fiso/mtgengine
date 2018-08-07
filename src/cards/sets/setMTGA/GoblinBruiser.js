"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBruiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Bruiser", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = GoblinBruiser;
