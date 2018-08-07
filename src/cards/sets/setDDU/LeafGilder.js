"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafGilder extends UnimplementedCard {
  constructor (game) {
    super(game, "Leaf Gilder", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = LeafGilder;
