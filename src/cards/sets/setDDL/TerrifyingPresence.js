"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrifyingPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Terrifying Presence", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TerrifyingPresence;
