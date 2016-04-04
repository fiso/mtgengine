"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightmareVoid extends Card {
  constructor(game) {
    super(game, "Nightmare Void", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = NightmareVoid;
