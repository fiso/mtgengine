"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingShell extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Shell", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ShamblingShell;
