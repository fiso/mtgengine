"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreewindEquenaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Freewind Equenaut", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FreewindEquenaut;
