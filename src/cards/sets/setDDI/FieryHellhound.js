"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryHellhound extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Hellhound", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = FieryHellhound;
