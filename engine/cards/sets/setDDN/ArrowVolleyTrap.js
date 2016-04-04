"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArrowVolleyTrap extends Card {
  constructor(game) {
    super(game, "Arrow Volley Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ArrowVolleyTrap;
