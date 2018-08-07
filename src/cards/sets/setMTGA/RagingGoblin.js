"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging Goblin", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = RagingGoblin;
