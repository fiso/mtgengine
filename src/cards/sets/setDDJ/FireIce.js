"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireIce extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire // Ice", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = FireIce;
