"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieInvaders extends Card {
  constructor(game) {
    super(game, "Faerie Invaders", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FaerieInvaders;
