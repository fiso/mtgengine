"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReclusiveArtificer extends UnimplementedCard {
  constructor (game) {
    super(game, "Reclusive Artificer", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ReclusiveArtificer;
