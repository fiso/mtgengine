"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulParry extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Parry", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SoulParry;
