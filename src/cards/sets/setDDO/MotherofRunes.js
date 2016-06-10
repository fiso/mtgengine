"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MotherofRunes extends UnimplementedCard {
  constructor (game) {
    super(game, "Mother of Runes", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MotherofRunes;
