"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhiplashTrap extends Card {
  constructor(game) {
    super(game, "Whiplash Trap", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = WhiplashTrap;
