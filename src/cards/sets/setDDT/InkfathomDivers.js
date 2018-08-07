"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InkfathomDivers extends UnimplementedCard {
  constructor (game) {
    super(game, "Inkfathom Divers", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = InkfathomDivers;
