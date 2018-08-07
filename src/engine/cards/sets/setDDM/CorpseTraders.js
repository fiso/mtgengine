"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseTraders extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Traders", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = CorpseTraders;
