"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrowVolleyTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Arrow Volley Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ArrowVolleyTrap;
