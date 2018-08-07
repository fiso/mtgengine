"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningTreeEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning-Tree Emissary", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = BurningTreeEmissary;
