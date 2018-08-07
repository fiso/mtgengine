"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doomgape extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomgape", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Doomgape;
