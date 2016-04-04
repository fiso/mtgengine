"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FencingAce extends UnimplementedCard {
  constructor(game) {
    super(game, "Fencing Ace", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FencingAce;
