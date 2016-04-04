"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FencingAce extends Card {
  constructor(game) {
    super(game, "Fencing Ace", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FencingAce;
