"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConqueringManticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Conquering Manticore", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ConqueringManticore;
