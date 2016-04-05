"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KilnFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiln Fiend", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = KilnFiend;
