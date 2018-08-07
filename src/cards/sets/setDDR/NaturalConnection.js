"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalConnection extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Connection", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = NaturalConnection;
