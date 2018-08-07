"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Goblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = Goblin;
