"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Shaman", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ViridianShaman;
