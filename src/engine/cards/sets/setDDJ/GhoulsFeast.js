"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhoulsFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghoul's Feast", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GhoulsFeast;
