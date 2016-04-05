"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverwhelmingIntellect extends UnimplementedCard {
  constructor(game) {
    super(game, "Overwhelming Intellect", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = OverwhelmingIntellect;
