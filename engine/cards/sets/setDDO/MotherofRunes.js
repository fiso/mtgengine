"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MotherofRunes extends Card {
  constructor(game) {
    super(game, "Mother of Runes", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MotherofRunes;
