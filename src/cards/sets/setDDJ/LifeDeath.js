"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Life // Death", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LifeDeath;
