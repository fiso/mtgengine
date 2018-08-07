"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedCataract extends UnimplementedCard {
  constructor (game) {
    super(game, "Blighted Cataract", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BlightedCataract;
