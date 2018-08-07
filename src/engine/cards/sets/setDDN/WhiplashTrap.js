"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiplashTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Whiplash Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = WhiplashTrap;
