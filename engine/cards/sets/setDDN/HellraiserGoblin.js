"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellraiserGoblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellraiser Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HellraiserGoblin;
