"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OverwhelmingIntellect extends Card {
  constructor(game) {
    super(game, "Overwhelming Intellect", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = OverwhelmingIntellect;
