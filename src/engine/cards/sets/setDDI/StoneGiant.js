"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Giant", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = StoneGiant;
