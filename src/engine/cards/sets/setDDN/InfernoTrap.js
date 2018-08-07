"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = InfernoTrap;
