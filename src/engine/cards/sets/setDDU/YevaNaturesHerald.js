"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YevaNaturesHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Yeva, Nature's Herald", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = YevaNaturesHerald;
