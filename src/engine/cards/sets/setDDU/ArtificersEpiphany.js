"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtificersEpiphany extends UnimplementedCard {
  constructor (game) {
    super(game, "Artificer's Epiphany", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ArtificersEpiphany;
