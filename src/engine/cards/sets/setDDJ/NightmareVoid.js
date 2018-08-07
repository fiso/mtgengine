"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightmareVoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightmare Void", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = NightmareVoid;
