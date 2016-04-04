"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedGoblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Frenzied Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FrenziedGoblin;
