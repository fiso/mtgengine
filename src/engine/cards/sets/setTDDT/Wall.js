"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wall extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall", "Duel Decks: Merfolk vs. Goblins Tokens", "TDDT");
  }
}

module.exports = Wall;
